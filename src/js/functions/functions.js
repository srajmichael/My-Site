const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const smoothScroll = (event, identifier) => {
    event.preventDefault();
    try{
        const target = document.querySelector(identifier);
        if(target){
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }catch(err){
        console.log(err.message())
    }

}






module.exports = {
    randomBetween,
    smoothScroll
};