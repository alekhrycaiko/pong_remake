#pragma strict

function Start () {
 	 var rend = GetComponent.<Renderer>();
	 rend.material.SetColor("_Color", Color.black);
}
