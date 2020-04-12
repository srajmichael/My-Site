import React from 'react';

const Intro = () => (
    <section id='intro' className='section-padding-y-l'>
        <canvas id='intro_canvas'></canvas>
        <div id='intro_jumbotron'>
            <div id='intro-content'>
                <h2 id='intro_jumbotron_name'>Michael Sraj</h2>
                <h1 id='intro_jumbotron_desc'>Thoughtful Development and Design</h1>
            </div>
            <img id='intro-logo' src='./images/Logo_100px_red.svg'/>
            
        </div>
    </section>
);

export default Intro;