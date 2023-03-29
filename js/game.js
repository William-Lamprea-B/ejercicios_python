const WIDTH = 400
const HEIGH = 400

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH) 
};


//console.log(target)
let $map=document.getElementById('map');
let $disance = document.getElementById('distance');
let click=0;
$map.addEventListener('click', function(e){
   // console.log('click');
   click++;
   let distance = getDistance(e, target);

   //console.log(distance);
   let distanceHit = getDistanceHit(distance);
   //console.log(distanceHit);
   $disance.innerHTML = `<h1> ${distanceHit}</h1>`

   if (distance<11){
    alert(`el tesoro es tuyo ${click} clicks!`);
    location.reload();
   }
})