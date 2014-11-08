#pragma strict

var playerCamera : Camera;

var tileSize : Vector2;

var tile : GameObject;

private var tiles : Hashtable = new Hashtable();

function Start () {
	/*Debug.Log(tile.GetComponent(SpriteRenderer).sprite.rect);
	Debug.Log(tile.GetComponent(SpriteRenderer).bounds);
	Debug.Log(tile.GetComponent(SpriteRenderer).bounds.min);
	Debug.Log(tile.GetComponent(SpriteRenderer).bounds.max);
	Debug.Log(tile.transform.position);
	Debug.Log(playerCamera.pixelRect);*/



	//for(var i=0;i < 	5;i++){
		//var instance = Instantiate(tile, Vector3(tileSize.x * i, tileSize.y * i, 0), Quaternion.identity);
	//}

	//var camRec = playerCamera.pixelRect;
	//var instance = Instantiate(tile, Vector3(camRec.x, camRec.y , -100), Quaternion.identity);

	//Debug.Log(Mathf.Floor((camRec.x - (camRec.width/2))/tileSize.x));

	//var instance = Instantiate(tile, Vector3((Mathf.Floor(camRec.x/tileSize.x) -1) * tileSize.x, 0 , -100), Quaternion.identity);
	//var left = camRec.x - (camRec.width/2);
	//var right = camRec.x + (camRec.width/2);

	//oldLeft = Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x));

	//Debug.Log(oldLeft);

	//for(var i=Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x));i<=Mathf.Ceil(right/(tileSize.x * tile.transform.localScale.x));i++){
	////	tiles.Add(Instantiate(tile, Vector3(i * tileSize.x, 0 , -100), Quaternion.identity));
	//}
}

private var oldLeft : int;

function Update () {
	//Debug.Log(playerCamera.transform.position.x - playerCamera.rect.width/2);
	//Debug.Log(playerCamera.transform.position.x);
	//Debug.Log(playerCamera.rect.y - playerCamera.rect.height/2);

	var camRec = playerCamera.pixelRect;
	var left = playerCamera.transform.position.x;// - (camRec.width/2);
	var right = playerCamera.transform.position.x;// + (camRec.width/2);

	var top = playerCamera.transform.position.y;// - (camRec.height/2);
	var bottom = playerCamera.transform.position.y;// + (camRec.height/2);


	var leftIndex = Mathf.Floor(left/(tileSize.x));
	var rightIndex = Mathf.Ceil(right/(tileSize.x ));


	var topIndex = Mathf.Floor(top/(tileSize.y));
	var bottomIndex = Mathf.Ceil(bottom/(tileSize.y ));
	

	var newHash = new Hashtable();

	for(var i=leftIndex-1;i <= rightIndex+1; i++){
		for(var k = topIndex-1; k<= bottomIndex+1; k++){
			var key = i+"-" + k;
			if(!tiles.ContainsKey(key)){
				var newTile : GameObject = Instantiate(tile, Vector3(i * tileSize.x, k * tileSize.y , 0), Quaternion.identity);
				newTile.transform.parent = transform;
				newHash.Add(key, newTile);
			} else {
				newHash.Add(key, tiles[key]);
				tiles.Remove(key);
			}
		}
	}

	for(var j in tiles.Keys){
		var t : GameObject = tiles[j];
		Destroy(t);
	}

	tiles.Clear();
	tiles = newHash;

		//tiles = newTable;

	//Debug.Log(Vector2(leftIndex, rightIndex));
	//Debug.Log(Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x)));

	/*if(oldLeft != Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x))){
		oldLeft = Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x));
		oldRight = right;

		Debug.Log(Mathf.Ceil(right/tileSize.x));

		tiles.Clear();

		for(var i=Mathf.Floor(left/(tileSize.x * tile.transform.localScale.x));i<=Mathf.Ceil(right/(tileSize.x * tile.transform.localScale.x));i++){
			tiles.Add(Instantiate(tile, Vector3(i * tileSize.x, 0 , -100), Quaternion.identity));
		}
	}*/
}