#pragma strict


var dodge : float;
var startWait : Vector2;
var smoothing : float;
var tilt : float;
var aneuverTime : Vector2;
var maneuverWai : Vector2;
  

private var rb : Rigidbody;
private var targetX : float;
private var targetY : float;
private var targetZ : float;

function Start () {
	rb = GetComponent(Rigidbody);
	
    StartCoroutine(Evade());
}




function Evade() {
    yield WaitForSeconds (Random.Range(startWait.x, startWait.y));
    while (true)
    {
    	targetX = Random.Range(1, dodge) * -Mathf.Sign(GetComponent(Transform).position.x);
    	targetY = Random.Range(1, dodge) * -Mathf.Sign(GetComponent(Transform).position.y);
    	targetZ = Random.Range(1, dodge) * -Mathf.Sign(GetComponent(Transform).position.z);
            yield WaitForSeconds (Random.Range(aneuverTime.x, aneuverTime.y));
        targetX = 0;
        targetY = 0;
        targetZ = 0;
        	yield WaitForSeconds (Random.Range(maneuverWai.x, maneuverWai.y));
        }
    
}


function FixedUpdate ()
    {
        var newManeuverX : float = Mathf.MoveTowards (rb.velocity.x, targetX, Time.deltaTime * smoothing);
        var newManeuverY : float = Mathf.MoveTowards (rb.velocity.y, targetY, Time.deltaTime * smoothing);
        var newManeuverZ : float = Mathf.MoveTowards (rb.velocity.z, targetZ, Time.deltaTime * smoothing);
        rb.velocity = new Vector3 (newManeuverX, newManeuverY, newManeuverZ);
        rb.position = new Vector3 
        (
            Mathf.Clamp (rb.position.x, -50f, 50f),
            Mathf.Clamp (rb.position.y, 0f, 10f),
            Mathf.Clamp (rb.position.z, -50f, 50f)
        );
       }