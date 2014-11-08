#pragma strict

var projectile : Transform;

var fireTimeout : float;

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
	if(enableFire){
		enableFire = false;
		var instance = Instantiate(projectile, Vector3 (transform.position.x, transform.position.y, 0), rotation);
		instance.parent = GameObject.Find("Projectiles").transform;
	}
}