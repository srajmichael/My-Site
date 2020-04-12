import React from 'react';

const Footer = () => (
    <footer>
        <p>Copyright&copy; {new Date().getFullYear()} Michael Sraj Jr.</p>
        <div className='social-container'>
            <a href='https://codepen.io/srajmichael/'><i className="fab fa-codepen"></i></a>
            <a href='https://github.com/srajmichael'><i className="fab fa-github-alt"></i></a>
            <a href='https://www.linkedin.com/in/michael-sraj-23597810b/'><i className="fab fa-linkedin-in"></i></a>
        </div>
    </footer>
);


export default Footer;