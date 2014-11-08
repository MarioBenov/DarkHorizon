#pragma strict

public class basicEnemy extends MonoBehaviour{
	public var isEnemy : boolean = true;

	public var player : GameObject;
	
	public var speed : Vector2;
	
	public var direction : float;
	
	public var health : int;
	
	public var hitDamage : int;
	
	function Start () {
		speed = player.transform.position - transform.position;
		rigidbody2D.velocity = speed;
	}

	function Update () {
		//rigidbody2D.velocity = player.transform.position - transform.position;
	}
	
	function OnCollisionEnter2D(coll : Collision2D){
		if(coll.gameObject == player){
			player.GetComponent(playerController).hit(hitDamage);
			die();
		}
	}
	
	function OnTriggerEnter2D(coll : Collider2D){
		if(coll.gameObject == player){
			player.GetComponent(playerController).hit(hitDamage);
			die();
		}
	}
	
	public function destroy(){
		var children = transform.childCount;
		for (var i = 0; i < children; i++) {
		    Destroy(transform.GetChild (i).gameObject);
		}

		Destroy(gameObject);
	}
	
	function hit(damage : int){
		Debug.Log(damage);
		health -= damage;
		if(health < 0){
			die();
		}
	}
	
	function die(){
		destroy();
	}
}