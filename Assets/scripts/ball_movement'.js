#pragma strict

// Ideally with this script, I'd like to implement collisions in order to provide more realistic bouncing (particularly on angles)


var start_speed: int = 2;	

function Start () {
var our_ball = this.gameObject;

var rb = this.gameObject.GetComponent.<Rigidbody>(); 	

	//Set the colour of the ball (orange is marvelous)
 	// use GetCompnent<Renderer> since gameObject.renderer.material is deprecated (as of Unity 5 I believe).
	// pre-condition: Mesh-renderer must be functioning & added to the ball.
	 var marvelous_orange = Color(1,0.6,0);
	 var rend = GetComponent.<Renderer>();
	 rend.material.SetColor("_Color", marvelous_orange);
 	// Force the ball in either players direction
 		if (Random.Range(0, 1.0) <= 0.5){
			our_ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * start_speed);
			}
		else{
			our_ball.GetComponent.<Rigidbody>().AddForce(Vector3.back * start_speed);
		} 
	}

function Update (){
// Destroy our pong ball if it goes off course!
	if (this.transform.position.z < -5)
	Destroy(this.gameObject);
	if (this.transform.position.z > 5)
	Destroy(this.gameObject);
	
	// Left click acts to restart the game and reset the level.
	if (Input.GetMouseButtonDown(0)){
		Application.LoadLevel(Application.loadedLevel);
		}

// In the future, it'd be ideal to respawn this ball.
	}
