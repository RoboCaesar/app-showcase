import React from 'react';
import Header from './Header';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome to my web app showcase.</h1>
                <p>By Thomas in 2018</p>
            </div>
        );
    }
}