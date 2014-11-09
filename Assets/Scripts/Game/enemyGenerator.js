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
private var stopped : boolean = false;

function Update () {
	if(!stopped){	
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
}

function stop(){
	stopped = false;
}

function OnTriggerExit2D(coll : Collider2D){
	if(coll.gameObject == player.gameObject){
		currentArea ++;
		areaBoundry.radius *= areaDistanceModulo;
	}
}

function destroy(){
	for(var enemy : Transform in enemyContainer.transform){
		Destroy(enemy.gameObject);
	}
	Destroy(this);
}