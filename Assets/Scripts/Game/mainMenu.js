#pragma strict

function Start () {

}

function Update () {

}

var native_width : float = 1920;
var native_height : float = 1080;

function OnGUI ()
{

	var rx : float = Screen.width / native_width;
	var ry : float = Screen.height / native_height;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (rx, ry, 1));

	if (GUI.Button(Rect(625,475,610,170), "", GUIStyle.none))
				Application.LoadLevel ("mainGame");
				
	if (GUI.Button(Rect(625,720,610,170), "", GUIStyle.none))
			Application.Quit();

}