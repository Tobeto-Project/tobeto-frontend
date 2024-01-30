// Spinner.js
import React from 'react';
import './Spinner.css'; // Spinner stilini burada içe aktarabilirsiniz
import tobetoLogo from '../../../Assets/Images/tobeto-black.png'; // Tobeto'nun logosunu içe aktarın

const Spinner = () => {
    return (
        <div className="spinner-container">
            <img src={tobetoLogo} alt="Tobeto Logo" className="logo" />
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
