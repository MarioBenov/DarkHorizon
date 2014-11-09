#pragma strict

var player : GameObject;
var manager : gameManager;
var reward : int;

function OnTriggerEnter2D(coll : Collider2D){
	Debug.Log( player);
	if(coll.gameObject == player){
		player.GetComponent(playerController).addPoints(reward);
		manager.winGame();
	}
}