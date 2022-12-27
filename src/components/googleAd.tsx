import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface PropTypes {
    classNames: string,
    slot: string,
    timeout: number,
    googleAdId: string,
};

class GoogleAd extends Component {

}


const defaultProps = {
    classNames: '',
    timeout: 200,
};

export default GoogleAd;