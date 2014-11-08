#pragma strict

var projectile : Transform;

var fireTimeout : float;

var player : playerController;

private var timeout : float = 0.0;
private var enableFire : boolean = true;

function Start () {
	
}

function Update () {
	if(!enableFire){
		timeout += Time.deltaTime;
		if(timeout >= fireTimeout){
			timeout = 0;
			enableFire = true;
		}
	}
}

function fire(position : Vector2, rotation : Quaternion){
	if(enableFire && player.rockets > 0){
		player.rockets --;	
		enableFire = false;
		var instance = Instantiate(projectile, Vector3 (transform.position.x, transform.position.y, 0), rotation);
		instance.parent = GameObject.Find("Projectiles").transform;
	}
}