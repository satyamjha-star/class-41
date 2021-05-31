class Game {
     constructor(){} 
        getState(){ 
            var gameStateRef = database.ref('gameState');
            gameStateRef.on("value",function(data){
                gameState = data.val();
            })}

            update(state){
                database.ref("/").update({
                    gameState: state 
                    });
                }
                
                async start(){
                   if(gameState === 0){ 
                        player = new Player();
                        var playerCountRef = await database.ref("playerCount").once("value");
                        if (playerCountRef.exists()){
                            playerCount = playerCountRef.val();
                            player.getCount()
                        }

                    
                        form = new Form();
                        form.display(); 
                    } 
        car1 = createSprite(800,200);
        car1.addImage(c1);

        car2 = createSprite(300,200);
        car2.addImage(c2);

        car3 = createSprite(500,200);
        car3.addImage(c3);

        car4 = createSprite(700,200);
        car4.addImage(c4);

        cars = [car1,car2,car3,car4]
            }
            play(){
                form.hide();
                
          
                Player.getPlayerInfo();
                if (allPlayers!==undefined){
                    background(road2);
                    image(road1,0,-displayHeight*4,displayWidth,displayHeight*5);
                    //var dp = 130;
                    var index = 0;
                    var x ;
                    var y ;
                    for(var plr in allPlayers){
                        index = index+1;
                        x = 200+(index*200)+allPlayers[plr].xPos;
                        y = displayHeight-allPlayers[plr].distance;
                        cars[index-1].x = x;
                        cars[index-1].y = y;
                        if (index === player.index){
                        fill("red");
                        camera.position.x = displayWidth/2;
                        camera.position.y = cars[index-1].y;
                        }
                        else 
                        fill("white");
                        //dp = dp+20;
                        //textSize(20);
                        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,dp)
                    }
                }
if (keyIsDown(UP_ARROW)&&player.index!==null){
              player.distance = player.distance+50;
              player.update();


              if (keyIsDown(LEFT_ARROW)){
                player.xPos = player.xPos-10;
                player.update();
              }
              
              if (keyIsDown(RIGHT_ARROW)){
                player.xPos = player.xPos+10;
                player.update();
            }

}
if (player.distance>3860){
gameState = 2;
}

 drawSprites();
            }
end(){
console.log("game End");
    }            
}

