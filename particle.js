class Particle{
constructor(x,y,r){
var options={
restitution:0.4
}
this.r=r

this.Body=body.circle(x,y,this.r,options)
this.color=color(random(0,255) , random(0,255),random(0,255))
World.add(world,thi.body);
}
display(){

var pos=this.body.postion;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
FileList(this.color)
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();


}

}


























































