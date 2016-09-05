#pragma strict

private var player : GameObject ;              

private var playerHealth : health;        // Reference to this enemy's health.
private var ani : Animator;

function Start () {
	player = GameObject.FindGameObjectWithTag ("Player");
	playerHealth = player.GetComponent (health);
	ani = GetComponent(Animator);
}
function OnTriggerEnter(other : Collider)
{
	if (other.gameObject.tag == "Player")
	{
	ani.Play("attack");
    playerHealth.health -= 300;
}

}


function Update () {

}