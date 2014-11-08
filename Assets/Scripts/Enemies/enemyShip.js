#pragma strict

public class enemyShip extends basicEnemy {
	public var projectile : Projectile;
	
	function Start () {
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
	}

	function Update () {
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		//transform.rotation = 
		Debug.Log(Mathf.Rad2Deg * Mathf.Atan2(rigidbody2D.velocity.y - player.transform.position.y, rigidbody2D.velocity.x - player.transform.position.x));
		//transform.Rotate(transform.eulerAngles - Vector3(0, 0, Vector3.Angle(rigidbody2D.velocity, player.transform.position)));
		//var deg = Vector3.Angle(rigidbody2D.velocity, player.transform.position);
		//transform.localEulerAngles = Vector3(0,0, deg);
		Debug.Log(rigidbody2D.velocity);
		Debug.Log(player.transform.position);
		Debug.Log(Vector3.Angle(transform.position, player.transform.position));
		
		transform.rotation.eulerAngles = Vector3(0, 0, Vector3.Angle(transform.position, player.transform.position));
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