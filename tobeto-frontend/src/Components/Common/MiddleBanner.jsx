import React from 'react';
import "../../Styles/CommonStyles/MiddleBannerStyle.css";

const MiddleBanner = ({ children }) => {
  return (
    <div className='middle-banner p-1 ms-4'>
      {children}
    </div>
  );
}

export default MiddleBanner;
