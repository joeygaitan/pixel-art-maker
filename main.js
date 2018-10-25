var color = 'white';
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');
let black = document.querySelector('#black');
let white = document.querySelector('#white');
let red = document.querySelector('#red');
let pink = document.querySelector('#pink'); 
let brown = document.querySelector('#brown');
console.log(document.querySelector('#blue'))
blue.addEventListener("click", function(event){
    color = 'blue'
});

green.addEventListener("click", function(){
    color ='green'
});

yellow.addEventListener("click", function(){
    color ='yellow'
});

black.addEventListener("click", function(){
    color ='black'
});

white.addEventListener("click", function(){
    color ='white'
});

red.addEventListener("click", function(){
    color ='red'
});

pink.addEventListener("click", function(){
    color ='pink'
});

brown.addEventListener("click", function(){
    color ='brown'
});

function makeGrid() {
    console.log('hello')
    let w, h;
    w = 10;
    h = 10;
    
    for(tr=1; tr<=h; tr++) { // Build table rows
        let tr = document.createElement('tr'); 
        document.querySelector('#pixel_canvas').appendChild(tr);
        for(td=1; td<=w; td++){ // Build table columns
            let td = document.createElement('td');
            document.querySelector('#pixel_canvas').appendChild(td);
            td.addEventListener('click', function(e){
                e.target.classList.toggle(color);
            })  
        }
    }
  }
  
  makeGrid();


