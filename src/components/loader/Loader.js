import React from 'react';
import {connect} from 'react-redux';
import './Loader.scss';

const Loader = ({ isLoaderActive }) => {    
    return (
        <div className={`Loader ${isLoaderActive ? 'active' : ''}`}>Loading...</div>
    );
};

const mapStateToProps = state => {
    return {
        isLoaderActive: state.isLoaderActive
    };
};

export default connect(mapStateToProps)(Loader);