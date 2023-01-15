function setup() {
    createCanvas(800, 800);
    noLoop();
    fill(0);
    ellipseMode(RADIUS);
  }
  
  function draw() {
    background(255);
    drawp = points(5);
    for (var i = 0; i<5; i++){
      circle(drawp[i][0], drawp[i][1], secdist(drawp,i))
    }
    textSize(100);
    text('spleg', 250, 110);
  }
  
  function secdist(p,x){
    pop(p, x);
    var distar =[]
    for (var i=0; i<5; i++){
      append(distar, dist(p[i][0], p[i][1], p[x][0],p[x][1]))
    }
    sort(distar);
    print(distar)
    print(distar[0])
    return distar[1]
  }
  
  function points(n){
    var p = [];
    for (var i = 0; i < n; i++) {
      append(p, [int(random(0,100))+200,int(random(0,100))+50]);
  
    }
    return p
  }