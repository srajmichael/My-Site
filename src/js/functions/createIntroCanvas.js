import Circle from '../classes/Circle';
import {randomBetween} from './functions';

const createIntroCanvas = (canvas) => {
    let circles = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext('2d');





    const animate = () => {
    
        let numOfCircles = randomBetween(0,1);
        let maxCircles = 100;
        let currentCircleCount = circles.length;
        if(currentCircleCount + numOfCircles < maxCircles){
            for(let i = 0; i < numOfCircles; i++){
                let circle = new Circle(canvas, c);
                circles.push(circle);
            }
        }
    
    
        requestAnimationFrame(animate);
        if(document.getElementById('app-wrap').classList.contains('app-white')){
            c.fillStyle = 'rgba(247, 251, 252,.1)';
        }else{
            c.fillStyle = 'rgba(0, 0, 0,.06)';
        }
        
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

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })
}

export default createIntroCanvas;