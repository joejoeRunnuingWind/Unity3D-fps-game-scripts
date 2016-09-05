#pragma strict

var speed : float;

function Start () : void {
    var spawnRotation : Quaternion= Quaternion.identity;
    GetComponent.<Rigidbody>().velocity = transform.forward * speed;

    
}