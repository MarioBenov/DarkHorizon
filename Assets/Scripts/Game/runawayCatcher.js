#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionExit2D(coll : Collision2D){
	Destroy(coll.gameObject);
}
	
function OnTriggerExit2D(coll : Collider2D){
	Destroy(coll.gameObject);
}