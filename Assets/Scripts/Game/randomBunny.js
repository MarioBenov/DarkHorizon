#pragma strict

var player : Transform;
var playerCamera : Camera;

private var interval : float;
private var timeout : float;

var speed : float;
private var flyingBy : boolean = false;

function Start () {
	setNewInterval();
	//gameObject.SetActive(false);
	renderer.enabled = false;
}

function setNewInterval(){
	interval = Random.Range(7,13);
	timeout = 0;
}

function Update () {
	if(!flyingBy){
		timeout += Time.deltaTime;
		
		if(timeout >= interval){		
			//gameObject.SetActive(true);
			renderer.enabled = true;
			flyingBy = true;
			transform.position = Random.insideUnitCircle * 150 + player.transform.position;
			rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		}
	}
}

function OnTriggerExit2D(coll : Collider2D){
	if(coll.gameObject.GetComponent(cameraCollision)){
		setNewInterval();
		flyingBy = false;
		//gameObject.SetActive(false);
		renderer.enabled = false;
	}
}