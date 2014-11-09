#pragma strict


public class ammoPickup extends pickupBase{
	public var ammo : int;

	function OnTriggerEnter2D(coll : Collider2D){
		if(coll.gameObject == player.gameObject){
			player.GetComponent(playerController).addAmmo(ammo);
			
			var children = transform.childCount;
			for (var i = 0; i < children; i++) {
			    Destroy(transform.GetChild (i).gameObject);
			}

			Destroy(gameObject);
		};
	};
};