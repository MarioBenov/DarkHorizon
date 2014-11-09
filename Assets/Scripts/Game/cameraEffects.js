#pragma strict

var hitOverlay : SpriteRenderer;
var healthTolerance : int;

var player : playerController;

var shakeDuration : float;
private var shakeElapsed : float;
var shakeOffset : float;
private var shaking : boolean = false;

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
	
	if(shaking){
		shakeElapsed += Time.deltaTime;
		if(shakeElapsed >= shakeDuration){
			shaking = false;
			transform.position = player.transform.position + (Vector3.back * 100);
		} else {
			var vec2 = Random.insideUnitCircle * shakeOffset + player.transform.position;
			transform.position = Vector3(vec2.x, vec2.y, -100);
		}
	} else {
		transform.position = Vector3(player.transform.position.x, player.transform.position.y, transform.position.z);
	}
}

function shake(){
	shaking = true;
	shakeElapsed = 0;
}