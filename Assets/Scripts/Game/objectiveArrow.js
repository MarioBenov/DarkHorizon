#pragma strict

var target : Transform = null;
var source : Transform;

function Start(){
	//gameObject.SetActive(false);
	renderer.enabled = false;
}

function setTarget(_target : Transform){
	renderer.enabled = true;
	target = _target;
	
}

function Update () {
	if(target != null){
		rigidbody2D.rotation = Mathf.Atan2(source.position.y - target.position.y,
			source.position.x - target.position.x) * (180 / Mathf.PI) + 270;
	}
}