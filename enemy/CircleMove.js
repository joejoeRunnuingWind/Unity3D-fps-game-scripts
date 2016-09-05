#pragma strict

var angle : float;

function Start () {

}

function Update() {
		
		transform.RotateAround (Vector3.zero, Vector3.up, angle * Time.deltaTime);
	}