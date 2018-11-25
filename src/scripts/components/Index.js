import React from 'react';
import AppSelect from './AppSelect';

export default class Index extends React.Component {
    render() {
        return (
            <div className="showcase-view">
                <h1>Welcome to my web app showcase.</h1>
                <p>By Thomas in 2018</p>
                <AppSelect/>
            </div>
        );
    }
}