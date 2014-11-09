#pragma strict

public class YOMAMMA extends basicEnemy {
	public var projectile : GameObject;
	
	public var shotInterval : float;
	
	private var shotTimeout : float;
	
	public var maxFireDistance : float;
	
	public var shotOrigins : Transform[];
	
	function Start () {
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
	}

	function Update () {
		rigidbody2D.velocity = (player.transform.position - transform.position).normalized * speed;
		rigidbody2D.rotation = Mathf.Atan2(player.transform.position.y - transform.position.y,
			player.transform.position.x - transform.position.x) * (180 / Mathf.PI) + 270;
			
		shotTimeout += Time.deltaTime;
		if(shotTimeout >= shotInterval && (player.transform.position - transform.position).magnitude <= maxFireDistance){
			shotTimeout = 0;
			for(var origin in shotOrigins){
				var instance = Instantiate(projectile, Vector3 (origin.position.x, origin.position.y, 0), transform.rotation);
				instance.gameObject.transform.parent = GameObject.Find("Projectiles").transform;
			}
		}
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
	
	function die(){
		Instantiate(explosion, transform.position, transform.rotation);
	
		destroy();
	}
}