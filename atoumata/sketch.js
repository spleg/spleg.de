
let width =500;
let a = new Array(width);


for (let i=0; i< width; i++){
  a[i]=Math.round(Math.random());
}
a[0]=1
function setup() {
  pixelDensity(1);
  createCanvas(width, width);

}

function rule90(q){
  let temp = new Array(width)
  for (let i =0; i < q.length; i++){
    temp[i] = q[(i-1)%width]^q[(i+1)%width];
  } 
  return temp;
}
function rule184(q){
  let temp = new Array(width)
  for (let i =0; i < q.length; i++){
    if (q[i]==0){
      temp[i] = q[(i-1)%width]
    }else{
      temp[i] = q[(i+1)%width]
    }
  } 
  return temp;
}


function draw() {
  
  loadPixels()
  for (let j =width-1 ; j> -1; j--){
    for (let i = 0; i <width; i++){
      let index =  j*width*4 + i*4;
      pixels[index] = pixels[index - width*4] ;
    // Green.
      pixels[index + 1] = pixels[index - width*4 +1] ;
    // Blue.
      pixels[index + 2] = pixels[index - width*4 +2] ;
    // Alpha.
      pixels[index + 3] = 255 ;
    }
    
  }
  for (let i = 0; i <width; i++){
    let index = i*4;
    let col = 0;

    if (a[i] == 0){
      col = 255;
    }
    pixels[index] = col;
    pixels[index+1] = col;
    pixels[index+2] = col;
    pixels[index+3] = 255;
  }
  updatePixels();
  a = rule90(a)
}



