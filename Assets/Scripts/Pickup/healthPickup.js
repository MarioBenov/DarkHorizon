#pragma strict


public class healthPickup extends MonoBehaviour implements Pickup{
	public var player : GameObject;
	public var health : int;

	function OnTriggerEnter2D(coll : Collider2D){
		if(coll.gameObject == player){
			player.GetComponent(playerController).repair(health);
			
			var children = transform.childCount;
			for (var i = 0; i < children; i++) {
			    Destroy(transform.GetChild (i).gameObject);
			}

			Destroy(gameObject);
		};
	};
};