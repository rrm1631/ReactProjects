import React from 'react';
import PropTypes from 'prop-types';

export default function Header({text, bgColor, textColor}) { //pass in props or destructure {text}

    const headerStyles = {
        backgroundColor: bgColor, 
		color: textColor
    };

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
