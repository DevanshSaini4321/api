const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var response;
var engine, world;
var response
var bg ;
var time;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    async function getBackgroundImg(){

        // write code to fetch time from API
       
            response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
            bgimg= loadImage(bg)
    
        
    
        //change the data in JSON format
     responseJSON = await response.json();
     var datatime =  responseJSON.datetome;
        // write code slice the datetime
        hour = datetime.slice(11.13);
    
    
        // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06)
    {
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<08){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<12){
        bg = "sunrise4.png";
    }else {
        bg = "sunrise5png";
    
    
    }
        //load the image in backgroundImg variable here
        getBackgroundImg.loadImg = loadImg(bg);
    }
    

}

function draw(){


   
var a = text("time:"+"hour",30,100)


}

