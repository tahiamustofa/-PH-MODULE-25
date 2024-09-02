console.log('this is another file');

   // option-3 // option-1
    // <button onclick="console.log(56)">Click Me</button>

// option-2
/* <button onclick="purple()">purple</button> */

function purple() {
    document.body.style.backgroundColor='purple'; 
 }

 const getBlue = document.getElementById('blue');
 console.log(getBlue);
 getBlue.onclick= blue;


function blue(){
 document.body.style.backgroundColor='blue';
}

// option 3 diff
const red= document.getElementById('red');
    console.log(red);
    red.onclick = function makeRed(){
      document.body.style.backgroundColor = 'red';
    } 

  // Option-4
  const pinkish = document.getElementById('makepink');   
  // console.log(pinkish);
  pinkish.addEventListener('click',pinku);
  function pinku(){
      document.body.style.backgroundColor='pink';
  }

//   option-4 another
const greenMake = document.getElementById('make-green');
greenMake.addEventListener('click',function btnGreen( ) {
  document.body.style.backgroundColor = 'green';
})
// option-4 final
document.getElementById('golden-rod').addEventListener('click',function() {
    document.body.style.backgroundColor='goldenrod'
})

