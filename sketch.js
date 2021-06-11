var soldierWalk,soldierJump,soldierAttack,soldierDead;
var monsterWalk,monsterAttack;
var groundImg;
var coinImg;
var bombImg;
var explosionImg;
var backgroundImg;
var rock1Img,rock2Img,rock3Img,rock4Img;







function preload(){
	soldierWalk = loadAnimation("images/soldierJump1.png","images/soldierWalk2.png");
	soldierJump = loadAnimation("images/soldierJump1.png","images/soldierJump2.png","images/soldierJump3.png","images/soldierJump4.png",
	"images/soldierJump5.png","images/soldierJump6.png");
	soldierDead = loadAnimation("images/deadsoldier1.png","images/deadsoldier2.png","images/deadsoldier3.png",
	"images/deadsoldier4.png","images/deadsoldier5.png")
	soldierAttack = loadAnimation("images/soldierAttack1.png","images/soldierAttack2.png","images/soldierAttack3.png");
	monsterWalk = loadAnimation("images/monster1.png","images/monster2.png","images/monster3.png",
	"images/monster4.png","images/monster5.png","images/monster6.png");
	monsterAttack = loadImage("images/monsterAttack.png");
	groundImg = loadImage("images/ground3.png");
	coinImg = loadImage("images/coin.png");
	bombImg = loadImage("images/bomb.png");
	backgroundImg = loadImage("images/bg.jpg");
	backgroundImg.scale = 2.0;
	explosionImg = loadImage("images/explosion.png");
	rock1Img = loadImage("images/rock1.png");
	rock2Img = loadImage("images/rock2.png");
	rock3Img = loadImage("images/rock3.png");
	rock4Img = loadImage("images/rock4.png");


}
function setup(){
	createCanvas(windowWidth,windowHeight);
	bg = createSprite(0,windowHeight/2,windowWidth,windowHeight);
	bg.addImage(backgroundImg);
	bg.scale = 2;
	
	
	invisibleGround = createSprite(windowWidth/2,windowHeight-10,windowWidth,30);
	invisibleGround.visible = false;
	soldier = createSprite(100,windowHeight-200,10,10);
	soldier.addAnimation("soldierWalking",soldierWalk);
	soldier.scale = 0.8;
	//soldier.debug = true;
	
	soldier.setCollider("circle",0,0,80);
	rock1 = createSprite(100,windowHeight-130,20,20);
	rock1.addImage(rock1Img);
	//rock1.debug = true;

	rock2 = createSprite(200,windowHeight-220,20,20);
	rock2.addImage(rock2Img);
	rock3 = createSprite(300,windowHeight-350,20,20);
	rock3.addImage(rock3Img);
	//rock2.debug = true,
	//rock3.debug = true;
	rock1.setCollider("circle",-220,-100,30);
	rock2.setCollider("circle",-50,-110,30);
	rock3.setCollider("circle",105,-75,30);
	camera.on();



}
function draw(){

	background("white");
camera.x = soldier.x;
/*if(camera.position.x + width/2 >ground.x + ground.width/2){
		ground.x = camera.position.x
		 invisibleGround.x = camera.position.x ;
	}
*/	
	if(keyDown("SPACE")){
		soldier.velocityY = -10;
		
	}
	if(keyDown("RIGHT")){
		soldier.x = soldier.x +10;
	}
	soldier.velocityY = soldier.velocityY+0.9;
	soldier.collide(invisibleGround);
	soldier.collide(rock1);
	soldier.collide(rock2);
	soldier.collide(rock3);
	if(soldier.x - rock1.x !== 0){
	if(soldier.x-rock1.x>400){
		rock1.x = soldier.x+500;
	}
}
if(soldier.x-rock2.x !== 0){
	if(soldier.x-rock2.x>400){
		rock2.x = soldier.x+500;
	}
}
	if(soldier.x-rock3.x>400){
		rock3.x = soldier.x+500;
	};
	if(soldier.x-bg.x>200){
		invisibleGround.x = soldier.x;
		bg.x = soldier.x+200;
	}

	
	
	drawSprites();
}
