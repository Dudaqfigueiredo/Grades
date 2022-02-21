import React from 'react';
import PropTypes from  'prop-types';
import './estilo.css';

const Header = ({ icon, title }) => {

    return (
      <nav className='Header bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        
      </nav>

      
    );
  };
  
  Header.defaultProps = {
    title: 'Reminders',
    icon: 'fa-solid fa-list-check',
  };
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  
  export default Header;