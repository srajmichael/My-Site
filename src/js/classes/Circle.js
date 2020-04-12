import {randomBetween} from '../functions/functions';

class Circle{
    constructor(canvas, context){
        this.c = context;
        this.canvas = canvas;
        this.radius = randomBetween(1,2);
        this.x = Math.random() * this.canvas.width;
        this.y = 0 - (this.radius / 2);
        this.dy = randomBetween(3,6);
        this.colors = ['#f5f2f2', '#706f6f', '#525252','#706f6f']
        this.colorIndex = randomBetween(0,3);
        this.color = this.colors[this.colorIndex];
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);

    }

    draw(lastY){
        this.c.beginPath();
        this.c.strokeStyle = this.color;
        this.c.lineWidth = this.radius;
        this.c.moveTo(this.x, lastY);
        this.c.lineTo(this.x, this.y);
        this.c.stroke();
        this.c.closePath();
    }

    update(){
        const lastY = this.y;

        this.y = this.y + this.dy;
        
        if(this.y <= this.canvas.height){
            this.draw(lastY);
        }
        
    }

}

export default Circle;