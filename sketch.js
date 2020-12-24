var dog,happyDog;
var database;
var foodS,foodStock;
var dogSprite;
function preload(){
     dog=loadImage("images/dogImg.png");
     happyDog=loadImage("images/dogImg1.png");
}

function setup() {
     database = firebase.database();
     createCanvas(500,500);
     dogSprite=createSprite(250,250,50,50);
     dogSprite.addImage(dog);
     dogSprite.scale=0.2;
     foodStock=database.ref('Food');
     foodStock.on("20",readStock());
}

function draw() {  
     background(46, 139, 87);
     drawSprites();
     if(keyWentDown(UP_ARROW)){
       writeStock(foodS);
       dog.addImage(happyDog);
     }

     textSize("32");
     fill(176,14,41);
     text("Note:Press Up Arrow Key To Feed Dog Milk",400,400); 
}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){
      if(x<=0){
         x=0;
      }
      else{
         x=x-1;
      }

      database.ref('/').update({
      Food:x
    })
}

