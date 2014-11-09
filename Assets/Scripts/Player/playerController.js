#pragma strict

var speed : float;
var angularSpeed : float;
var playerCamera : Camera;

var health : int;
var points : int;
var money : int;
var rockets : int;

var maxHealth : int;

var weapons : GameObject[];

var cameraControl : cameraEffects;

function Start () {

}

function Update () {
	var h : float = Input.GetAxis("Horizontal");
	var v : float = Input.GetAxis("Vertical");

	//rigidbody2D.velocity = Vector2(Mathf.Cos(Mathf.Deg2Rad * rigidbody2D.rotation) * v * speed, Mathf.Sin(Mathf.Deg2Rad * rigidbody2D.rotation) * h * speed);
	rigidbody2D.velocity = Vector2( - Mathf.Sin(Mathf.Deg2Rad * rigidbody2D.rotation) * v * speed, Mathf.Cos(Mathf.Deg2Rad * rigidbody2D.rotation) * v * speed);
	rigidbody2D.angularVelocity = - h * angularSpeed;

	//Debug.Log(Mathf.Sin(Mathf.Deg2Rad * rigidbody2D.rotation));

	//playerCamera.transform.position = Vector3(transform.position.x, transform.position.y, playerCamera.transform.position.z);
	//Debug.Log(playerCamera.transform.Translate)
	//Debug.Log(rigidbody2D.rotation);
	if(Input.GetAxis("Fire")){
		for(var weapon in weapons){
			if(weapon.GetComponent(pinkLazer)){
				weapon.GetComponent(pinkLazer).fire(transform.position, transform.rotation);
			}
			//Debug.Log(weapon);
		}
	}
	
	if(Input.GetAxis("FireRocket")){
		for(var weapon in weapons){
			if(weapon.GetComponent(rocketLauncher)){
				weapon.GetComponent(rocketLauncher).fire(transform.position, transform.rotation);
			}
			//Debug.Log(weapon);
		}
	}
}

function repair(additionalHealth : int){
	health += additionalHealth;
	if(health > maxHealth){
		health = maxHealth;
	}
}

function addPoints(amount : int){
	money += amount;
}

function hit(damage : int){
	health -= damage;
	
	cameraControl.shake();
	
	if(health < 0){
		health = 0;
	}
}

function destroy(){
	for(var element : Transform in transform){
		Destroy(element.gameObject);
	}

	Destroy(this);
}