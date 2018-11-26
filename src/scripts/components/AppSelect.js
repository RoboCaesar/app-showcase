import React from 'react';

export default class AppSelect extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>instantWeather</li>
                    <li><a href="/typing-test">Typing Test</a></li>
                    <li><a href="/card-matching">Matching Cards Game</a></li>
                </ul>
            </div>
        );
    }
}