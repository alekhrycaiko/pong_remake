#pragma strict

// Fields

var paddle_speed: int = 10;

// Setting game boundaries for the Pong paddles. We can either use variables with locations, or
// Alternatively, we could use weight, gravity and colliders to make the walls immovable by the Pong ball or paddles.
// The second option makes adjusting for different resolutions quite easy!

var boundary_max_x: double = 3.0;
var boundary_min_x: double = -3.0;


function Start () {
 var lime_green = Color(0.6, 1.0,0);
	 var rend = GetComponent.<Renderer>();
	 rend.material.SetColor("_Color", lime_green);
}

function Update () {
	
	if (Input.GetKey(KeyCode.A)){
		transform.position += Vector3.left * paddle_speed * Time.deltaTime;
	}
	if (Input.GetKey(KeyCode.D)){
		transform.position += Vector3.right * paddle_speed * Time.deltaTime;
		}	
	}	
	
