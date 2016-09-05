#pragma strict

var speed : float;

function Start () {

	
		GetComponent(Rigidbody).velocity = transform.forward * speed;
	



}
