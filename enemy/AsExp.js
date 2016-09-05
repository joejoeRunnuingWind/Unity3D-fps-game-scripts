#pragma strict
var explosion : GameObject;
private var enemyHealth : health;

function Start () {

}

function Update () {
enemyHealth = GetComponent(health);

if(enemyHealth.health <= 0 )
    {
       
       Instantiate(explosion, transform.position, transform.rotation);
    }
}

