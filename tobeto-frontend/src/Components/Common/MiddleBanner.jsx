import React from 'react';
import "../../Styles/CommonStyles/MiddleBannerStyle.css";
import SearchComponent from './PlatformKatalog/SearchComponent';

const MiddleBanner = ({ children }) => {
  return (
    <div className='middle-banner p-1'>
      {children}
      <SearchComponent />
    </div>
  );
}

export default MiddleBanner;
