import React from 'react';
import {toggleNav} from '../functions/functions';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            navIsOpen: false,
            mobileMaxWidth: 766 
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount(){
        const nav = document.getElementById('main-nav');
        nav.setAttribute('data-isopen', this.state.mobileMaxWidth < window.innerWidth);
        nav.setAttribute('data-ismobile', this.state.mobileMaxWidth >= window.innerWidth);
        let h = 0;
        const children = nav.children;
        for(let child of children){
            h += child.offsetHeight;
        }
        nav.setAttribute('data-open-height', h);
        const toggler = document.getElementById('nav-toggler');

        toggler.addEventListener('click', ()=>{
            this.toggleNav(nav);
        });
        window.addEventListener('resize', ()=>{
            nav.setAttribute('data-isopen', this.state.mobileMaxWidth < window.innerWidth);
            nav.setAttribute('data-ismobile', this.state.mobileMaxWidth >= window.innerWidth);
            let h = 0;
            const children = nav.children;
            for(let child of children){
                h += child.offsetHeight;
            }
            nav.setAttribute('data-open-height', h);
            if(window.innerWidth > this.state.mobileMaxWidth){
                nav.style.height = '';
            }else{
                nav.style.height = '0px';
            }
        })
    }

     toggleNav(nav){
        const isMobile = nav.getAttribute('data-ismobile');
        const isOpen = nav.getAttribute('data-isopen');
        const h = nav.getAttribute('data-open-height');
        console.log(isOpen)
        if(isMobile){
            if(isOpen === 'true'){
                console.log('close')
                nav.style.height = '0px';
                nav.setAttribute('data-isopen', false);
            }else{
                console.log('open')
                nav.style.height = h + 'px';
                nav.setAttribute('data-isopen', true);
            }
        }
    }





    render(){
        return(
            <header>
            <ul id='main-nav'>
                <li><a href='#intro'>Home</a></li>
                <li><a href='#about'>About</a></li>
                {/* <li><a href='#projects'>Projects</a></li> */}
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div id='nav-toggler'><p></p><p></p><p></p></div>
        </header>
        );
    }

}

export default Header;