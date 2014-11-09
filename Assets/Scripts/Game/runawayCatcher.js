#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionExit2D(coll : Collision2D){
	if(coll.gameObject.GetComponent(playerController)){
		coll.transform.position = Vector3(0,0,0);
	} else {
		Destroy(coll.gameObject);
	}
}
	
function OnTriggerExit2D(coll : Collider2D){
	if(coll.gameObject.GetComponent(playerController)){
		coll.transform.position = Vector3(0,0,0);
	} else {
		Destroy(coll.gameObject);
	}
}