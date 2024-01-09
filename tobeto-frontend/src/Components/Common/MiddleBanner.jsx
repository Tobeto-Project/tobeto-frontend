import React from 'react';
import "../../Styles/CommonStyles/MiddleBannerStyle.css";

const MiddleBanner = ({ children }) => {
  return (
    <div className='middle-banner'>
        {children}
    </div>
  );
}

export default MiddleBanner;
