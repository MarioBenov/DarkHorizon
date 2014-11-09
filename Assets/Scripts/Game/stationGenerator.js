#pragma strict

var goalTime : float;
var goalMoney : int;
private var elapsedTime : float;

var player : playerController;
var gameManager : gameManager;

var goal : GameObject;
var radius : float;

var findStationMessage : GUIText;
var messageDuration : float;
private var messageElapsed : float = 0;

function Start(){
	
}

function Update2(){
	messageElapsed += Time.deltaTime;
	
	if(messageElapsed >= messageDuration){
		Destroy(findStationMessage);
		Destroy(this);
	}
}

function Update1() {
	elapsedTime += Time.deltaTime;
	
	if(elapsedTime >= goalTime && player.money >= goalMoney){
		var instance = Instantiate(goal, Random.insideUnitCircle * radius, Quaternion.identity);
		instance.gameObject.GetComponent(spaceStation).player = player.gameObject;
		instance.gameObject.GetComponent(spaceStation).manager = gameManager;
		updateFunc = Update2;
		findStationMessage.gameObject.SetActive(true);
	}
}

private var updateFunc = Update1;

function Update(){
	updateFunc();
}