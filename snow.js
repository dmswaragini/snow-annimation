class Snow{
constructor(x,y){
    var options={
        friction:1,
        isStatic:false
         }
    this.body= Matter.Bodies.rectangle(x,y,this.width,this.height,options);
    this.width=50;
    this.height=50;
    this.image=loadImage("snow4.webp");
    World.add(world, this.body);

}
display(){
    var pos=this.body.position
image(this.image,pos.x,pos.y,this.width,this.height);

}
}