import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import HeaderNav from './HeaderNav';
import './header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Wrapper } from '../../styles';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fafafa;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  z-index: 100;
  padding-top: 0.5rem;

  @media (max-width: 700px) {
    padding-top: 0;
  }
`;

const ContentWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Logo = styled(({ scrollDown, ...rest }) => <Link {...rest} />)`
  text-decoration: none;
  color: #006acc;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;

  height: 30px;
  transition: 300ms;
  transform-origin: bottom;
  margin-bottom: 0.5rem;

  :hover {
    color: #148eff;
  }

  @media (max-width: 700px) {
    grid-column: 1;
    margin-top: 0.5rem;
    ${({ scrollDown }) =>
      scrollDown &&
      css`
        height: 0;
        font-size: 0;
        margin-bottom: 0;
      `}
  }
`;

const SearchWrapper = styled.div`
  @media (max-width: 700px) {
    grid-column: 1/4;
  }
`;

/* when passing style props (scrollDown) to an external component, they must be filtered out, otherwise they will be passed to the DOM element, causing a warning */
const Hamburger = styled(({ scrollDown, ...rest }) => (
  <FontAwesomeIcon {...rest} />
))`
  height: 30px;
  transition: 300ms;
  transform-origin: bottom;
  margin-bottom: 0.5rem;
  display: none;

  @media (max-width: 700px) {
    grid-row: 1;
    grid-column: 3;
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: auto;
    margin-top: 0.5rem;

    ${({ scrollDown }) =>
      scrollDown &&
      css`
        height: 0;
        font-size: 0;
        margin-bottom: 0;
      `}
  }
`;

const WatchlistWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 700px) {
    display: inline-block;
  }
`;

const WatchlistButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #006acc;
  border-radius: 3px;
  font-size: 0.95rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: 1px solid #006acc;

  :hover {
    background: #006acc;
    color: white;
    cursor: pointer;
  }
`;

const NavWrapper = styled.div`
  grid-column: 1 / 4;
`;

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    // Hide/display nav part of header depending on window size
    const resizer = new ResizeObserver((e) => {
      // Move main down into view
      main.style.paddingTop = `${header.getBoundingClientRect().height + 16}px`;
      if (window.innerWidth > 700) {
        setDisplayNav(true);
        setToggleNav(false);
      } else {
        setDisplayNav(false);
      }
    });
    resizer.observe(main);

    // shrink/grow header based on scroll direction

    // const headerLogo = document.querySelector('.header-logo');
    // const headerHamburger = document.querySelector('.header-hamburger');

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        setScrollDown(true);
        // headerLogo.classList.add('scroll-down');
        // headerHamburger.classList.add('scroll-down');
      } else if (currentScroll < lastScroll) {
        setScrollDown(false);
        // headerLogo.classList.remove('scroll-down');
        // headerHamburger.classList.remove('scroll-down');
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <StyledHeader>
      <ContentWrapper>
        <Logo scrollDown={scrollDown} to='/'>
          Stock Site
        </Logo>

        <SearchWrapper>
          <HeaderSearch setToggleNav={setToggleNav} />
        </SearchWrapper>

        <Hamburger
          scrollDown={scrollDown}
          icon={faBars}
          onClick={() => setToggleNav(!toggleNav)}
        />

        {(toggleNav || displayNav) && (
          <>
            <WatchlistWrapper>
              <WatchlistButton to='/watchlist'>Watchlist</WatchlistButton>
            </WatchlistWrapper>

            <NavWrapper>
              <HeaderNav setToggleNav={setToggleNav} />
            </NavWrapper>
          </>
        )}
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
