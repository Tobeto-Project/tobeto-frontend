import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  // Butonlar için ortak stil
  const buttonStyle = {
    width: '30px',
    height: '30px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem', 
    fontSize: '1.2rem',
  };



  return (
    <div className="d-flex justify-content-start py-2 mb-4">
     <img src="https://tobeto.com/_next/static/media/share-white.a59761b0.svg" alt="Share Icon" className='me-3' />
      <Button variant="primary" href="https://www.linkedin.com/company/tobeto?originalSubdomain=tr" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#0e76a8' }}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Button>
      <Button variant="info" href="https://twitter.com/tobeto_platform" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#1DA1F2' }}>
        <FontAwesomeIcon icon={faTwitter} />
      </Button>
      <Button variant="success" href="#" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#25D366' }}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>
      <Button variant="primary" href="https://www.facebook.com/tobetoplatform/?paipv=0&eav=AfZrRwQd-x4mEYXkaOlo6hvSIMRnti7sXNb9M2Tu5bHhZwzf8cHDk61NYh2ksK-4OyY&_rdr" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#3b5998' }}>
        <FontAwesomeIcon icon={faFacebookF} />
      </Button>
    </div>
  );
};

export default SocialMediaBar;
