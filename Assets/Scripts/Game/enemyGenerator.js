#pragma strict

public class EnemySpawnDefinition{
	public var prefab : GameObject;
	public var difficulty : int;
	public var frequency : float;
	public var lastSpawn : float;
}

var spawnDefinitions : EnemySpawnDefinition[];

var areaDistanceModulo : float;

var player : playerController;

var enemyContainer : Transform;

var baseDistance : float;

private var currentArea : int;
private var areaBoundry : CircleCollider2D;
private var spawnTimer : float;


function Start () {
	areaBoundry = gameObject.AddComponent(CircleCollider2D);
	areaBoundry.radius = baseDistance;
	
	spawnTimer = 0;
	currentArea = 1;
}

function Update () {	
	for(var def in spawnDefinitions){
		if(def.difficulty <= currentArea){
			def.lastSpawn += Time.deltaTime;
			if(def.lastSpawn >= def.frequency) {
				def.lastSpawn = 0;
				var instance = Instantiate(def.prefab, Random.insideUnitCircle * areaBoundry.radius, Quaternion.identity);
				instance.transform.parent = enemyContainer;
				instance.GetComponent(basicEnemy).player = player.gameObject;
			}
		}
	}
}


function OnTriggerExit2D(coll : Collider2D){
	Debug.Log(coll);
	if(coll.gameObject == player.gameObject){
		currentArea ++;
		areaBoundry.radius *= areaDistanceModulo;
	}
}