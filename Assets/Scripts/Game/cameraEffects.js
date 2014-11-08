#pragma strict

var hitOverlay : SpriteRenderer;
var healthTolerance : int;

var player : playerController;

function Start () {
}

function Update () {
	if(player.maxHealth - player.health >= healthTolerance ){
		var color : Color = hitOverlay.color;
		color.a =  (1 - ((player.health + 0.0) / (player.maxHealth - healthTolerance)));
		
		//Debug.Log(player.health + " " + player.maxHealth + " " + (255 * (1 - ((player.health + 0.0) / player.maxHealth))));
		//Debug.Log(((player.health + 0.0) / (player.maxHealth + 0.0)));
		
		hitOverlay.color = color;
	}
}