import React from 'react';
import { formatPhoneNumber } from '../../../../common/utils/helpers';
import './quoteProfile.css';

interface Props {
  profile: KeyValueObject;
}

const QuoteProfile: React.FC<Props> = ({ profile }) => {
  if (profile) {
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
    } = profile;

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
      <div className='quote-profile'>
        {(address || city || zip || phone || website) && (
          <section className='quote-profile__section'>
            <h3 className='quote-profile__heading'>Address</h3>
            {(address || city || zip) && (
              <div className='quote-profile__div'>
                <address>
                  {address && <p className='quote-profile__p'>{address}</p>}
                  {city && state && country && (
                    <p className='quote-profile__p'>
                      {city}, {state.toLowerCase()}, {country}
                    </p>
                  )}
                  {zip && <p className='quote-profile__p'>{zip}</p>}
                </address>
              </div>
            )}

            {(phone || website) && (
              <div className='quote-profile__div'>
                {phone && (
                  <a className='quote-profile__link' href={`tel: ${phone}`}>
                    {formatPhoneNumber(phone)}
                  </a>
                )}
                {website && (
                  <a className='quote-profile__link' href={website}>
                    {website}
                  </a>
                )}
              </div>
            )}
          </section>
        )}

        {(ceo || sector || industry || fullTimeEmployees) && (
          <section className='quote-profile__section'>
            <h3 className='quote-profile__heading'>Information</h3>
            <div className='quote-profile__div'>
              {ceo && (
                <p className='quote-profile__p'>
                  <strong>CEO: </strong>
                  {ceo}
                </p>
              )}
              {sector && (
                <p className='quote-profile__p'>
                  <strong>Sector: </strong>
                  {sector}
                </p>
              )}
              {industry && (
                <p className='quote-profile__p'>
                  <strong>Industry: </strong>
                  {industry}
                </p>
              )}
              {fullTimeEmployees && (
                <p className='quote-profile__p'>
                  <strong>Full-Time Employees: </strong>
                  {Number(fullTimeEmployees).toLocaleString()}
                </p>
              )}
            </div>
          </section>
        )}

        {description && (
          <section className='quote-profile__section'>
            <h3 className='quote-profile__heading'>Description</h3>
            <p className='quote-profile__p'>{description}</p>
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
