#pragma strict

private var duration : float = 0.20;
private var elapsed : float = 0;

function Start () {
}

function Update () {
	elapsed += Time.deltaTime;
	if(elapsed >= duration){
		Destroy(gameObject);
	}
}