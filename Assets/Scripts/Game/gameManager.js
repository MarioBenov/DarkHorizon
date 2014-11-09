#pragma strict

var player : playerController;
var enemyGenerator : enemyGenerator;
var pickups : GameObject;
var enemies : GameObject;
var projectiles : GameObject;
var playerCamera : Camera;

var endScreen : GameObject;
var winScreen : GameObject;

private var over = false;

function Start () {

}

function Update () {
	if(player != null && player.health <= 0){
		loseGame();
	}
}

function cleanObjects(){
	enemyGenerator.stop();
	enemyGenerator.destroy();

	for(var pickup : Transform in pickups.transform){
		Destroy(pickup.gameObject);
	}
	
	for(var projectile : Transform in projectiles.transform){
		Destroy(projectile.gameObject);
	}
	
	Destroy(playerCamera.gameObject.GetComponent(cameraCollision));
	Destroy(playerCamera.gameObject.GetComponent(cameraEffects));
	
	player.destroy();
	player = null;
}

function loseGame(){	
	over = true;
	
	endScreen.transform.GetChild(0).GetComponent(GUIText).text = player.money.ToString();
	endScreen.SetActive(true);
	
	cleanObjects();
}

function winGame(){
	over = true;
	
	winScreen.transform.GetChild(0).GetComponent(GUIText).text = player.money.ToString();
	winScreen.SetActive(true);
	
	cleanObjects();
}

var native_width : float = 1920;
var native_height : float = 1080;

function OnGUI ()
{
	if(over){
		var rx : float = Screen.width / native_width;
		var ry : float = Screen.height / native_height;
		GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (rx, ry, 1));

		if (GUI.Button(Rect(0, 0, native_width, native_height), "", GUIStyle.none))
					Application.LoadLevel ("mainMenu");
	}
}