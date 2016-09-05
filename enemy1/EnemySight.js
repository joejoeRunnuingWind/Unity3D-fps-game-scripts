#pragma strict
import UnityEngine.UI;

public var fieldOfViewAngle : float = 110f;             // Number of degrees, centred on forward, for the enemy see.
public var playerInSight : boolean;                     // Whether or not the player is currently sighted.
public var personalLastSighting : Vector3;              // Last place this enemy spotted the player.


private var nav : NavMeshAgent;                         // Reference to the NavMeshAgent component.
private var col : SphereCollider;                       // Reference to the sphere collider trigger component.
private var lastPlayerSighting : game;    // Reference to last global sighting of the player.
private var player : GameObject;                        // Reference to the player.

private var playerHealth : health;                // Reference to the player's health script.

private var previousSighting : Vector3;                 // Where the player was sighted last frame.


function Awake ()
{
    // Setting up the references.
    nav = GetComponent(NavMeshAgent);
    col = GetComponent(SphereCollider);
    
    lastPlayerSighting = GameObject.FindGameObjectWithTag("GameController").GetComponent(game);
    player = GameObject.FindGameObjectWithTag("Player");
    
    playerHealth = player.GetComponent(health);
    
    
    // Set the personal sighting and the previous sighting to the reset position.
    personalLastSighting = lastPlayerSighting.resetPosition;
    previousSighting = lastPlayerSighting.resetPosition;
}


function Update ()
{
    // If the last global sighting of the player has changed...
    if(lastPlayerSighting.position != previousSighting)
        // ... then update the personal sighting to be the same as the global sighting.
        personalLastSighting = lastPlayerSighting.position;
    
    // Set the previous sighting to the be the sighting from this frame.
    previousSighting = lastPlayerSighting.position;
    
  
}


function OnTriggerStay (other : Collider)
{
    // If the player has entered the trigger sphere...
    if(other.gameObject == player)
    {
        // By default the player is not in sight.
        playerInSight = false;
        
        // Create a vector from the enemy to the player and store the angle between it and forward.
        var direction : Vector3 = other.transform.position - transform.position;
        var angle : float = Vector3.Angle(direction, transform.forward);
        
        // If the angle between forward and where the player is, is less than half the angle of view...
        if(angle < fieldOfViewAngle * 0.5f)
        {
            var hit : RaycastHit;
            
            // ... and if a raycast towards the player hits something...
            if(Physics.Raycast(transform.position + transform.up, direction.normalized, hit, col.radius))
            {
                // ... and if the raycast hits the player...
                if(hit.collider.gameObject == player)
                {
                    // ... the player is in sight.
                    playerInSight = true;
                    
                    // Set the last global sighting is the players current position.
                    lastPlayerSighting.position = player.transform.position;
                }
            }
        }
        
        
        
    }
}


function OnTriggerExit (other : Collider)
{
    // If the player leaves the trigger zone...
    if(other.gameObject == player)
        // ... the player is not in sight.
        playerInSight = false;
}


function CalculatePathLength (targetPosition : Vector3)
{
    // Create a path and set it based on a target position.
    var path : NavMeshPath = new NavMeshPath();
    if(nav.enabled)
        nav.CalculatePath(targetPosition, path);
    
    // Create an array of points which is the length of the number of corners in the path + 2.
    var allWayPoints : Vector3[] = new Vector3[path.corners.Length + 2];
    
    // The first point is the enemy's position.
    allWayPoints[0] = transform.position;
    
    // The last point is the target position.
    allWayPoints[allWayPoints.Length - 1] = targetPosition;
    
    // The points inbetween are the corners of the path.
    for(var i = 0; i < path.corners.Length; i++)
    {
        allWayPoints[i + 1] = path.corners[i];
    }
    
    // Create a float to store the path length that is by default 0.
    var pathLength : float = 0;
    
    // Increment the path length by an amount equal to the distance between each waypoint and the next.
    for(var j = 0; j < allWayPoints.Length - 1; j++)
    {
        pathLength += Vector3.Distance(allWayPoints[j], allWayPoints[j + 1]);
    }
    
    return pathLength;
}
