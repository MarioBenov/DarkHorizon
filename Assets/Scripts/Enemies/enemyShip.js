#pragma strict

public class enemyShip extends basicEnemy {
	public var projectile : Projectile;
	
	function Start () {
		//speed = player.transform.position - transform.position;
		//transform.LookAt(player.transform);
		//Debug.Log(Vector3.Angle(transform.position, player.transform.position));
		//transform.Rotate(0,0,360 - Vector3.Angle(transform.position, player.transform.position));
		//rigidbody2D.velocity = Vector2(0, speed) + (player.transform.position - transform.position).normalized;
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		//transform.rotation = Quaternion.LookRotation(rigidbody2D.velocity);
		//transform.Rotate(rigidbody2D.velocity);
		//Debug.Log(player.transform.position - transform.position);
	}

	function Update () {
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		//transform.rotation = (rigidbody2D.velocity);
		Debug.Log();
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