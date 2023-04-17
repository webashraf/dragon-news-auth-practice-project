import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='py-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;