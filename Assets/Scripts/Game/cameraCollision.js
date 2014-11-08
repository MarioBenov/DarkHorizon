#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit2D(coll: Collider2D) {
	//Debug.Log(coll);
	if(coll.gameObject.GetComponent(Projectile)){
		coll.gameObject.GetComponent(Projectile).destroy();
	} 
	if(coll.gameObject.GetComponent(basicEnemy)){
		coll.gameObject.GetComponent(basicEnemy).die();
	}
	//Debug.Log(coll.gameObject.GetComponent(bulletProjectile).destroy);
	//coll.gameObject.GetComponent(bulletProjectile).destroy();
	//for(var child in coll)
}