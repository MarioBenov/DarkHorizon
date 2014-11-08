#pragma strict

var player : playerController;
var enemyGenerator : enemyGenerator;
var pickups : GameObject;
var enemies : GameObject;
var projectiles : GameObject;

var endScreen : GUIText;

function Start () {

}

function Update () {
	if(player.health <= 0){
		endGame();
	}
}

function endGame(){
	//enemyGenerator.destroy();
	
	endScreen.gameObject.SetActive(true);
}