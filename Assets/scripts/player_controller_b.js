#pragma strict
var paddle_speed: int = 10;

function Start () {

	 var rend = GetComponent.<Renderer>();
	 rend.material.SetColor("_Color", Color.red);
}

function Update () {
	// Set keys to control the paddle.
	if (Input.GetKey(KeyCode.Z)){
		transform.position += Vector3.left * paddle_speed * Time.deltaTime;
	}
	if (Input.GetKey(KeyCode.C)){
		transform.position += Vector3.right * paddle_speed * Time.deltaTime;
	}
	
}