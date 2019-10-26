import React from 'react';
import PropTypes from 'prop-types';


const Welcome = (props) => {
    const { message } = props;
    return (
        <div>
            <h1>{ message }</h1>
        </div>
    );
};

Welcome.propTypes = {
    message: PropTypes.string
};

export default Welcome;
