class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.xPos = 0;
        
   }
 getCount(){
   var playerCountref = database.ref ("playerCount");
   playerCountref.ref.on("value",(data)=>{
       playerCount=data.val();
   })
}
    updateCount(count){
  database.ref("/").update({
    playerCount:count
  })

  } 
 update(){
var playerIndex = "players/player"+this.index;
database.ref (playerIndex).set({
  name:this.name,
  distance:this.distance,
  xPos:this.xPos
})
} 
static getPlayerInfo(){
  var playerInfoRef = database.ref("players");
  playerInfoRef.on("value",(data)=>{
  allPlayers = data.val();
  

  })






}
 


}
// ===================================================================================================================
//                                       //####***********~~~~~~instalization
//====================================================================================================================