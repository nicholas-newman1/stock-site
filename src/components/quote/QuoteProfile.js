import React, { useEffect, useState, useContext } from 'react';
import { dummyProfileData } from '../../dummyData';
import { formatPhoneNumber } from '../../helpers';
import { RealDataContext } from '../../context/RealDataContext';
import Spinner from '../global/Spinner';
import '../../css/quote/quoteProfile.css';

const QuoteProfile = ({ symbol }) => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchProfile = async () => {
    let data;
    if (realData) {
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      setLoading(false);
    } else {
      data = dummyProfileData;
    }
    setProfileData(data);
  };

  useEffect(() => {
    fetchProfile();
    //eslint-disable-next-line
  }, [realData]);

  if (loading) {
    return <Spinner />;
  } else if (profileData.length > 0) {
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
    } = profileData[0];

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
                {address && <p className='quote-profile-p'>{address}</p>}
                {city && state && country && (
                  <p className='quote-profile-p'>
                    {city}, {state.toLowerCase()}, {country}
                  </p>
                )}
                {zip && <p className='quote-profile-p'>{zip}</p>}
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
