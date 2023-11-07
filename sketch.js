let qtree;
let canvas;
var landscape;
function windowResized()
{
    resizeCanvas(windowWidth,windowHeight);
}
function setup()
{
    canvas=createCanvas(windowWidth,windowHeight);
    canvas.CENTER;
    canvas.style('z-index','-1');
    //background(255);
    background(0);
    let boundary=new Rectangle(windowWidth,windowHeight,windowWidth,windowHeight);
    qtree=new QuadTree(boundary,4);
    for(let i=0;i<5000;i++)
    {
        let x=randomGaussian(width/2,width/8);
        let y=randomGaussian(height/2,height/8);
        let p=new Point(x,y);
        qtree.insert(p);
    }
}
function draw()
{
    background(0);
    background(landscape);
    qtree.show();
    stroke(0,255,0);
    //stroke(0,0,0);
    rectMode(CENTER);
    let range = new Rectangle(mouseX, mouseY, 25, 25);
    if (mouseX < width && mouseY < height) 
    {
        rect(range.x, range.y, range.w * 2, range.h * 2);
        let points = qtree.query(range);
        for (let p of points) 
        {
            strokeWeight(3);
            point(p.x, p.y);
        }
    }
}
function preload()
{
    landscape=loadImage("https://upload.wikimedia.org/wikipedia/commons/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG");
}