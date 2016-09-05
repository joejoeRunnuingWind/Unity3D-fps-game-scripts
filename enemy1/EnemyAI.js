#pragma strict

public var patrolSpeed : float = 2f;                        // The nav mesh agent's speed when patrolling.
public var chaseSpeed : float = 5f;                         // The nav mesh agent's speed when chasing.
public var chaseWaitTime : float = 5f;                      // The amount of time to wait when the last sighting is reached.
public var patrolWaitTime : float = 1f;                     // The amount of time to wait when the patrol way point is reached.
public var patrolWayPoints : Transform[];                   // An array of transforms for the patrol route.


private var enemySight : EnemySight;                        // Reference to the EnemySight script.
private var nav : NavMeshAgent;                             // Reference to the nav mesh agent.
private var player : Transform;                             // Reference to the player's transform.
private var playerHealth : health;                    // Reference to the PlayerHealth script.
private var lastPlayerSighting : game;        // Reference to the last global sighting of the player.
private var chaseTimer : float;                             // A timer for the chaseWaitTime.
private var patrolTimer : float;                            // A timer for the patrolWaitTime.
private var wayPointIndex : int;                            // A counter for the way point array.


function Awake ()
{
    // Setting up the references.
    enemySight = GetComponent(EnemySight);
   	nav = GetComponent.<NavMeshAgent>();
    player = GameObject.FindGameObjectWithTag("Player").transform;
    playerHealth = player.GetComponent(health);
    lastPlayerSighting = GameObject.FindGameObjectWithTag("GameController").GetComponent(game);
}


function Update ()
{
    // If the player is in sight and is alive...
    if(enemySight.playerInSight && playerHealth.health > 0f)
        // ... shoot.
        nav.SetDestination (player.position);
    
  
    else
        // ... patrol.
        Patrolling();
}







function Patrolling ()
{
    // Set an appropriate speed for the NavMeshAgent.
    nav.speed = patrolSpeed;
    
   
    
    // Set the destination to the patrolWayPoint.
    nav.destination = Vector3(10,0,10);
}