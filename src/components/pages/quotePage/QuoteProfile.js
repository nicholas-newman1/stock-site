import React from 'react';
import { dummyProfileData } from '../../../dummyData';
import { formatPhoneNumber } from '../../../helpers';
import Spinner from '../../global/Spinner';
import './quoteProfile.css';
import useFetch from '../../../hooks/useFetch';

const QuoteProfile = ({ symbol }) => {
  const { data, loading } = useFetch(
    [], // initial value
    `profile/${symbol}`, // endpoint
    dummyProfileData // dummy data
  );

  if (loading) {
    return <Spinner />;
  } else if (data.length > 0) {
    const {
      address,
      city,
      state,
      country,
      zip,
      phone,
      website,
      sector,
      industry,
      fullTimeEmployees,
      description,
      ceo,
    } = data[0];

    return address ||
      city ||
      zip ||
      phone ||
      website ||
      ceo ||
      sector ||
      industry ||
      fullTimeEmployees ||
      description ? (
      <div className='quote-profile-container'>
        {(address || city || zip || phone || website) && (
          <section className='quote-profile-section'>
            <h3 className='quote-profile-heading'>Address</h3>
            {(address || city || zip) && (
              <div className='quote-profile-div'>
                <address>
                  {address && <p className='quote-profile-p'>{address}</p>}
                  {city && state && country && (
                    <p className='quote-profile-p'>
                      {city}, {state.toLowerCase()}, {country}
                    </p>
                  )}
                  {zip && <p className='quote-profile-p'>{zip}</p>}
                </address>
              </div>
            )}

            {(phone || website) && (
              <div className='quote-profile-div'>
                {phone && (
                  <a className='quote-profile-link' href={`tel: ${phone}`}>
                    {formatPhoneNumber(phone)}
                  </a>
                )}
                {website && (
                  <a className='quote-profile-link' href={website}>
                    {website}
                  </a>
                )}
              </div>
            )}
          </section>
        )}

        {(ceo || sector || industry || fullTimeEmployees) && (
          <section className='quote-profile-section'>
            <h3 className='quote-profile-heading'>Information</h3>
            <div className='quote-profile-div'>
              {ceo && (
                <p className='quote-profile-p'>
                  <strong>CEO: </strong>
                  {ceo}
                </p>
              )}
              {sector && (
                <p className='quote-profile-p'>
                  <strong>Sector: </strong>
                  {sector}
                </p>
              )}
              {industry && (
                <p className='quote-profile-p'>
                  <strong>Industry: </strong>
                  {industry}
                </p>
              )}
              {fullTimeEmployees && (
                <p className='quote-profile-p'>
                  <strong>Full-Time Employees: </strong>
                  {Number(fullTimeEmployees).toLocaleString()}
                </p>
              )}
            </div>
          </section>
        )}

        {description && (
          <section className='quote-profile-section'>
            <h3 className='quote-profile-heading'>Description</h3>
            <p className='quote-profile-p'>{description}</p>
          </section>
        )}
      </div>
    ) : (
      <h3>No Data Available</h3>
    );
  } else {
    return <h3>No Data Available</h3>;
  }
};

export default QuoteProfile;
