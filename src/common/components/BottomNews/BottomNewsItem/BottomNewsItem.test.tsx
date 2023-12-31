import React from 'react';
import { render } from '@testing-library/react';
import BottomNewsItem from '.';

describe('<BottomNewsItem />', () => {
  const newsItem = {
    symbol: 'TNAV',
    publishedDate: '2020-11-03 15:44:00',
    title:
      'SHAREHOLDER ALERT: Levi & Korsinsky, LLP Notifies Investors of an Investigation.',
    image: 'https://cdn.snapi.dev/images/v1/h/c/press5---l93oowtyam.jpg',
    site: 'Newsfile Corp',
    text:
      'New York, New York--(Newsfile Corp. - November 3, 2020) - The following statement is being issued by Levi & Korsinsky, LLP:To: All Persons or Entities who purchased Telenav, Inc. (NASDAQ: TNAV) ("Telenav" or the "Company") stock prior to November 3, 2020.You are hereby notified that Levi & Korsinsky, LLP has commenced an investigation into the fairness of the The following statement is being issued by Levi & Korsinsky, LLP:To: All Persons or Entities who purchased Telenav, Inc. (NASDAQ: TNAV) ("Telenav" or the "Company") stock prior to November 3, 2020.You are hereby notified that Levi & Korsinsky, LLP has commenced an investigation into the fairness of the',
    url:
      'https://www.newsfilecorp.com/release/67422/SHAREHOLDER-ALERT-Levi-Korsinsky-LLP-Notifies-Investors-of-an-Investigation-into-the-Fairness-of-the-Sale-of-Telenav-Inc.-to-V99-Inc.',
  };

  it('should render without crashing', () => {
    render(<BottomNewsItem newsItem={newsItem} />);
  });

  it('should render the title as a heading', () => {
    const { getByRole } = render(<BottomNewsItem newsItem={newsItem} />);
    const heading = getByRole('heading');
    expect(heading.textContent).toBe(
      'SHAREHOLDER ALERT: Levi & Korsinsky, LLP Notifies Investors of an Investigation.'
    );
  });

  it('should truncate title to be 120 characters or less', () => {
    const newsItemCopy = { ...newsItem };
    newsItemCopy.title =
      'SHAREHOLDER ALERT: Levi & Korsinsky, LLP Notifies Investors of an Investigation into the Fairness of the Sale of Telenav, Inc. to V99, Inc.';
    const { getByText } = render(<BottomNewsItem newsItem={newsItemCopy} />);
    const title = getByText(/SHAREHOLDER/);
    expect(title.textContent!.length).toBeLessThanOrEqual(120);
  });

  it('should render the site name', () => {
    const { getByText } = render(<BottomNewsItem newsItem={newsItem} />);
    getByText(/^Newsfile Corp$/);
  });

  it('should have a time ago string', () => {
    const { getByText } = render(<BottomNewsItem newsItem={newsItem} />);
    getByText(/ago/);
  });

  it('should render the description text', () => {
    const { getByText } = render(<BottomNewsItem newsItem={newsItem} />);
    getByText(/New York/);
  });
});
