class Maze{
    constructor(){
        this.hlines=[];
        this.vlines=[];
        this.cheese=[];
        for(var i=0; i<10; i++){
            var randomX = random(i*10,600);
            var randomY = random(50,340);
            this.cheese[i]= createSprite(randomX,randomY,5,5);
        }
    }


    display(){
       var leftvline1= createSprite(50,200,5,300);
       leftvline1.shapeColor="blue"
       this.vlines.push(leftvline1);
       var leftvline2= createSprite(110,172.5,5,240);
       leftvline2.shapeColor="blue"
       this.vlines.push(leftvline2);
       var downhline1= createSprite(222.5,350,350,5);
       downhline1.shapeColor="blue"
       this.hlines.push(downhline1);
       var downhline2= createSprite(225,290,230,5)
       downhline2.shapeColor="blue"
       this.hlines.push(downhline2);
       var leftvline3= createSprite(400,220,5,200);
       leftvline3.shapeColor="blue"
       this.vlines.push(leftvline3);
       var leftvline4= createSprite(342,207.9,5,170);
       leftvline4.shapeColor="blue"
       this.vlines.push(leftvline4);
       var downhline3= createSprite(294.5,120,100,5);
       downhline3.shapeColor="blue"
       this.hlines.push(downhline3);
       var upleftvline1= createSprite(243,157.5,5,80);
       upleftvline1.shapeColor="blue"
       this.vlines.push(upleftvline1);
       var downhline4 = createSprite(205.5,200,80,5)
       downhline4.shapeColor="blue"
       this.hlines.push(downhline4);
       var upleftvline2 = createSprite(168,132.5,5,140);
       upleftvline2.shapeColor="blue"
       this.vlines.push(upleftvline2);
       var uphline1 = createSprite(305.5,60,280,5);
       uphline1.shapeColor="blue"
       this.hlines.push(uphline1);
       var downhline5 = createSprite(452.5,120,110,5);
       downhline5.shapeColor="blue"
       this.hlines.push(downhline5);
       var uprightvline1 = createSprite(443,32.5,5,50);
       uprightvline1.shapeColor="blue"
       this.vlines.push(uprightvline1);
       var upleftvline3 = createSprite(208,130,5,60);
       upleftvline3.shapeColor="blue"
       this.vlines.push(upleftvline3);
       var downhline6 = createSprite(540,10.5,190,6);
       downhline6.shapeColor="blue"
       this.hlines.push(downhline6);
       var uprightvline2 = createSprite(510,150,6,170);
       uprightvline2.shapeColor="blue"
       this.vlines.push(uprightvline2);
       var rightvline1 = createSprite(632,139,6,260);
       rightvline1.shapeColor="blue"
       this.vlines.push(rightvline1);
       var downhline7 = createSprite(568.5,238,123,6);
       downhline7.shapeColor="blue"
       this.hlines.push(downhline7);
       var rightvline2 = createSprite(568,75,6,123);
       rightvline2.shapeColor="blue"
       this.vlines.push(rightvline2);
       var downhline8 = createSprite(600,133.5,58,6);
       downhline8.shapeColor="blue"
       this.hlines.push(downhline8);
       var downhline9 = createSprite(654,271,50,6);
       downhline9.shapeColor ="blue"
       this.hlines.push(downhline9);
       var rightvline3 = createSprite(676,314,6,80);
       rightvline3.shapeColor = "blue"
       this.vlines.push(rightvline3);
       var downhline10 = createSprite(537.5,351,283,5);
       downhline10.shapeColor = "blue"
       this.hlines.push(downhline10);
       

    }

}