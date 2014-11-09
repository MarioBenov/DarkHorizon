#pragma strict

public class PickupSpawnDefinition{
	public var prefab : GameObject;
	public var frequency : float;
	public var lastSpawn : float;
}

var spawnDefinitions : PickupSpawnDefinition[];

var player : Transform;

var pickupContainer : GameObject;

var minDistanceFromPlayer : float;
var maxDistanceFromPlayer : float;

private var spawnTimer : float;

function Start () {
}
private var stopped : boolean = false;

function Update () {
	if(!stopped){	
		for(var def in spawnDefinitions){
			def.lastSpawn += Time.deltaTime;
			if(def.lastSpawn >= def.frequency) {
				def.lastSpawn = 0;
				var pos = Vector2(Random.Range(minDistanceFromPlayer, maxDistanceFromPlayer), Random.Range(minDistanceFromPlayer, maxDistanceFromPlayer)) + player.position;
				var instance = Instantiate(def.prefab, pos, Quaternion.identity);
				instance.transform.parent = pickupContainer.transform;
				instance.GetComponent(pickupBase).player = player.GetComponent(playerController);
			}
		}
	}
}

function stop(){
	stopped = false;
}

function destroy(){
	for(var pickup : Transform in pickupContainer.transform){
		Destroy(pickup.gameObject);
	}
	Destroy(this);
}