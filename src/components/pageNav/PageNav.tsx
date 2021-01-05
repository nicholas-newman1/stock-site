import React from 'react';
import './pageNav.css';

interface Props {
  data: any[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  resultsPerPage: number;
}

const PageNav: React.FC<Props> = ({ data, page, setPage, resultsPerPage }) => {
  // variables used to disable/enable next page and prev page btns
  const onLastPage = data.length - page * resultsPerPage <= resultsPerPage;
  const onFirstPage = page === 0;

  return data.length > resultsPerPage ? (
    <div className='page-nav'>
      <button
        className='page-nav__btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage}
      >
        {'< '}Prev Page
      </button>

      <button
        className='page-nav__btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage}
      >
        Next Page{' >'}
      </button>
    </div>
  ) : null;
};

export default PageNav;
