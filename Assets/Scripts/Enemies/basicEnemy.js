#pragma strict

public class basicEnemy extends MonoBehaviour{
	public var player : GameObject;
	
	public var speed : float;
	
	public var direction : float;
	
	public var health : int;
	
	public var hitDamage : int;
	
	public var pointValue : int;
	
	public var explosion : GameObject;
	
	function Start () {
		//speed = player.transform.position - transform.position;
		//transform.Rotate( 0, 0, Vector2.Angle(transform.position, player.transform.position));
		//rigidbody2D.velocity = Vector2(0, speed) + (player.transform.position - transform.position).normalized;
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		rigidbody2D.rotation = Mathf.Atan2(player.transform.position.y - transform.position.y,
			player.transform.position.x - transform.position.x) * (180 / Mathf.PI) + 270;
		//Debug.Log(player.transform.position - transform.position);
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
			player.GetComponent(playerController).addPoints(pointValue);
			die();
		}
	}
	
	function die(){
		Instantiate(explosion, transform.position, transform.rotation);
	
		destroy();
	}
}