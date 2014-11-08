#pragma strict

var rockets : GUIText;
var health : GUIText;
var money : GUIText;
var player : playerController;

function Start () {

}

function Update () {
	rockets.text = player.rockets.ToString();
	health.text = player.health.ToString();
	money.text = player.money.ToString();
}