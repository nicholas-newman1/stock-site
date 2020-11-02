import React, { useEffect, useState, useContext } from 'react';
import { dummyProfileData } from '../dummyData';
import { formatPhoneNumber } from '../helpers';
import { RealDataContext } from '../../context/RealDataContext';
import Spinner from '../Spinner';
import '../../css/quote/quoteProfile.css';

const QuoteProfile = ({ symbol }) => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
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

    data.length > 0 ? setDataAvailable(true) : setDataAvailable(false);
    setProfileData(data[0]);
  };

  useEffect(() => {
    fetchProfile();
    //eslint-disable-next-line
  }, [realData]);

  if (loading) {
    return <Spinner />;
  } else if (dataAvailable) {
    console.log(profileData);
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
    } = profileData;

    return (
      <div className='quote-profile-container'>
        <section className='quote-profile-section'>
          <h3 className='quote-profile-heading'>Address</h3>
          <div className='quote-profile-div'>
            <p className='quote-profile-p'>{address}</p>
            <p className='quote-profile-p'>
              {city}, {state.toLowerCase()}, {country}
            </p>
            <p className='quote-profile-p'>{zip}</p>
          </div>

          <div className='quote-profile-div'>
            <a className='quote-profile-link' href={`tel: ${phone}`}>
              {formatPhoneNumber(phone)}
            </a>
            <a className='quote-profile-link' href={website}>
              {website}
            </a>
          </div>
        </section>

        <section className='quote-profile-section'>
          <h3 className='quote-profile-heading'>Information</h3>
          <div className='quote-profile-div'>
            <p className='quote-profile-p'>
              <strong>CEO: </strong>
              {ceo}
            </p>
            <p className='quote-profile-p'>
              <strong>Sector: </strong>
              {sector}
            </p>
            <p className='quote-profile-p'>
              <strong>Industry: </strong>
              {industry}
            </p>
            <p className='quote-profile-p'>
              <strong>Full-Time Employees: </strong>
              {Number(fullTimeEmployees).toLocaleString()}
            </p>
          </div>
        </section>

        <section className='quote-profile-section'>
          <h3 className='quote-profile-heading'>Description</h3>
          <p className='quote-profile-p'>{description}</p>
        </section>
      </div>
    );
  } else {
    return <h3>No Data Available</h3>;
  }
};

export default QuoteProfile;
