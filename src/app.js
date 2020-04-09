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







const canvas = document.getElementById('intro_canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

function randomBetween(min, max){
    let it = Math.floor(Math.random() * (max - min + 1) + min);
    return it;
}

class Circle{
    constructor(){
        this.radius = 1;
        this.x = Math.random() * canvas.width;
        this.y = 0 - (this.radius / 2);
        this.dy = randomBetween(4,8);

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);

    }

    draw(lastY){
        c.beginPath();
        c.strokeStyle = '#3d6f85';
        c.lineWidth = this.radius;
        c.moveTo(this.x, lastY);
        c.lineTo(this.x, this.y);
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.arc(300, 300, 2, 0, Math.PI * 2, false);
        
        // c.fillStyle = '#3d6f85';
        // c.fill();
        c.stroke();
        c.closePath();
    }

    update(){
        const lastY = this.y;

        this.y = this.y + this.dy;
        
        if(this.y <= canvas.height){
            this.draw(lastY);
        }
        
    }
}





let x = 30;

let circles = [];


function animate(){

    let numOfCircles = randomBetween(0,1);
    let maxCircles = 100;
    let currentCircleCount = circles.length;
    if(currentCircleCount + numOfCircles < maxCircles){
        for(let i = 0; i < numOfCircles; i++){
            let circle = new Circle();
            circles.push(circle);
        }
    }


    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0,0,0,.05)';
    c.fillRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i< circles.length; i++){
        if(circles[i].y >= canvas.height){
            circles.splice(i, 1);
        }else{
            circles[i].update();
        }
        
    }
}
animate();