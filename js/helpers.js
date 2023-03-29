let getRandomNumber=size => {
    return Math.floor(Math.random()* size);
}
let getDistance = (e, tarjet) => {
    let diffX= e.offsetX - tarjet.x;
    let diffY=e.offsetY -tarjet.y;
    return Math.sqrt((diffX*diffX) +(diffY+diffY) );
}

let getDistanceHit = distance => {
    if(distance<11){
        return "😎El tesoro es tuyo";
    }
    else if(distance<30){
        return "🥵 muy cerca";
    }else if(distance<40){
        return "😱 cerca";
    }else if(distance<60){
        return "🥳ya casi";
    }else if(distance<100){
        return "😲 templado";
    }else if(distance<180){
        return "😵‍💫 lejos";
    }else if(distance<360){
        return "😴 muy lejos";
    }else{
        return "🥶 demasiado lejos";
    }


}