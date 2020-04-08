import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/Header';
import Intro from './js/components/Intro';
import 'normalize.css';
import './styles/styles.scss';


const MySite = () => (
    <div>
        <Header />
        <Intro />

    </div>
);







ReactDOM.render(<MySite />, document.getElementById('app'));
