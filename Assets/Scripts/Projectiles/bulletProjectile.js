#pragma strict

public class bulletProjectile extends MonoBehaviour implements Projectile{

	public var speed : int;
	
	public var damage : int;

	public function Start () {

	}

	public function Update () {
		transform.Translate(0, Time.deltaTime * speed, 0);
	}

	public function destroy(){
		var children = transform.childCount;
		for (var i = 0; i < children; i++) {
		    Destroy(transform.GetChild (i).gameObject);
		}

		Destroy(gameObject);
	}
	
	function OnTriggerEnter2D(coll : Collider2D){
		if( coll.GetComponent("basicEnemy")){
			coll.gameObject.GetComponent(basicEnemy).hit(damage);
			destroy();
		};
	}
};