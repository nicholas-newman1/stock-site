import React from 'react';
import BottomNews from '.';
import { render } from '@testing-library/react';
import { truncate } from '../../../helpers';

const dummyNewsData = [
  {
    symbol: 'RELX',
    publishedDate: '2021-01-25 05:46:04',
    title:
      'RELX: The LexisNexis Owner Is A Stable Company With A Strong Future',
    image: 'https://cdn.snapi.dev/images/v1/r/n/asset-management36.jpg',
    site: 'Seeking Alpha',
    text: 'RELX: The LexisNexis owner is a stable company with a strong future',
    url:
      'https://seekingalpha.com/article/4400722-relx-lexisnexis-owner-is-stable-company-strong-future',
  },
  {
    symbol: 'ZURVY',
    publishedDate: '2021-01-25 05:39:22',
    title: 'Zurich Insurance CEO on Outlook for Industry, Risks in 2021',
    image:
      'https://cdn.snapi.dev/images/v1/d/n/zurich-insurance-ceo-on-outlook-for-industry-risks-in-2021.jpg',
    site: 'Bloomberg Markets and Finance',
    text:
      'Jan.25 -- Mario Greco, chief executive officer of Zurich Insurance Group AG, discusses the outlook for financial markets, the insurance industry and risks in 2021. He speaks on "Bloomberg Surveillance.',
    url: 'https://www.youtube.com/watch?v=GmmiNgViWS0',
  },
];

describe('<BottomNews />', () => {
  it('should render without crashing', () => {
    render(<BottomNews newsData={dummyNewsData} loading={false} />);
  });

  it('should render correct titles', () => {
    const { getByText } = render(
      <BottomNews newsData={dummyNewsData} loading={false} />
    );
    getByText(
      /RELX: The LexisNexis Owner Is A Stable Company With A Strong Future/
    );
    getByText(/Zurich Insurance CEO on Outlook for Industry, Risks in 2021/);
  });

  it('should truncate titles longer than 120 characters', () => {
    const dummyData = JSON.parse(JSON.stringify(dummyNewsData));
    dummyData[0].title =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dignissimos consequuntur culpa nulla obcaecati voluptatibus cupiditate sit, neque facere officia similique necessitatibus voluptates quas reprehenderit.';
    const { getByText } = render(
      <BottomNews newsData={dummyData} loading={false} />
    );
    expect(getByText(/Lorem ipsum/).textContent!.length).toBeLessThanOrEqual(
      120
    );
  });

  it('should render correct site names', () => {
    const { getByText } = render(
      <BottomNews newsData={dummyNewsData} loading={false} />
    );
    getByText(/Seeking Alpha/);
    getByText(/Bloomberg Markets and Finance/);
  });

  it('should render time ago strings', () => {
    const { getAllByText } = render(
      <BottomNews newsData={dummyNewsData} loading={false} />
    );
    expect(getAllByText(/ago/).length).toBe(dummyNewsData.length);
  });

  it('should render correct descriptions', () => {
    const { getByText } = render(
      <BottomNews newsData={dummyNewsData} loading={false} />
    );
    getByText(
      /RELX: The LexisNexis Owner Is A Stable Company With A Strong Future/
    );
    getByText(
      /Jan.25 -- Mario Greco, chief executive officer of Zurich Insurance Group AG, discusses the outlook for financial/
    );
  });
});
