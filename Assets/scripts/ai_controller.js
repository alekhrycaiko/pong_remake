#pragma strict

var FOLLOW_SPEED: float;
var our_ball : Transform;

function Start(){
	 	var rend = GetComponent.<Renderer>();
		 rend.material.SetColor("_Color", Color.magenta);

}


function Update () {
	// We are using a tag that will let our paddle track the 'target' ball.
	// Transformation o between the target & ball x location will occur.
	// Frame rate independence is accounted for (per usual).
	our_ball = GameObject.FindWithTag("target").transform;
	transform.position.x = Mathf.Lerp(transform.position.x, our_ball.position.x, FOLLOW_SPEED * Time.deltaTime);

}

