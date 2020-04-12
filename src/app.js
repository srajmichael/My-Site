import React from 'react';
import ReactDOM from 'react-dom';
import {smoothScroll} from './js/functions/functions';
import Header from './js/components/Header';
import Intro from './js/components/Intro';
import createIntroCanvas from './js/functions/createIntroCanvas';
import ProjectsSection from './js/components/ProjectsSection';
import AboutSection from './js/components/AboutSection';
import ContactSection from './js/components/ContactSection';
import Footer from './js/components/Footer';
import 'normalize.css';
import './styles/styles.scss';


class MySite extends React.Component{
    constructor(){
        super();
        this.state = {
            navOpen: false,
            showingIntro: false
        }
        this.handleIntroObserver = this.handleIntroObserver.bind(this);
    }

    componentDidMount(){
        // this.handleIntroObserver();
        const hashTags = document.querySelectorAll('a[href^="#"]');
        hashTags.forEach( hash => {
            const id = '#' + hash.getAttribute('href').split('#')[1];
            hash.addEventListener('click', (e)=>{
                smoothScroll(e, id);
            })
        })


    }

    handleIntroObserver(){
        const handleIntroObserverEntries = (entries, observer) => {
            entries.forEach( entry => {
                if(!entry.isIntersecting){
                    this.setState(()=>{
                        return {
                            showingIntro: true
                        }
                    });
                }else{
                    this.setState(()=>{
                        return {
                            showingIntro: false
                        }
                    });
                }
            });
        }
        const options = {
            root: null,
            threshold: 0,
            rootMargin: '-100px 0px 0px 0px'
        }
        const observer = new IntersectionObserver(handleIntroObserverEntries, options);
        observer.observe(document.getElementById('intro'));
    }



    render(){
        return (
            <div id='app-wrap' className={this.state.showingIntro ? 'app-white' : ''}>
            <Header />
            <Intro />
            <AboutSection />
            {/* <ProjectsSection /> */}
            
            <ContactSection />
            <Footer />
        </div>
        );
    }
}








ReactDOM.render(<MySite />, document.getElementById('app'));




createIntroCanvas(document.getElementById('intro_canvas'));

