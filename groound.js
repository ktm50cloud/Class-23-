class Ground{
    constructor(x,y,w,h){
        var options={
        'isStatic':true
        }
    this.ktm = Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
       World.add(world,this.ktm); 
    }
    display(){
        var pos=this.ktm.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}