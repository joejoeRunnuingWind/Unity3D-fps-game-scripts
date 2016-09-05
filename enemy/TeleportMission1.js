
#pragma strict

public var requireKey : boolean;                    // Whether or not a key is required.
public var waitTime : float;
public var accessClip : AudioClip;            // Clip to play when the player doesn't have the key for the door.
private var player : GameObject;                    // Reference to the player GameObject.
private var playerInventory : PlayerInventory;  // Reference to the PlayerInventory script.


function Awake ()
{
    // Setting up the references.
    
    player = GameObject.FindGameObjectWithTag("Player");
    playerInventory = player.GetComponent(PlayerInventory);
}


function OnTriggerEnter (other : Collider)
{
    // If the triggering gameobject is the player...
    if(other.gameObject == player)
    {
        // ... if this door requires a key...
        if(requireKey)
        {
            // ... if the player has the key...
            if(playerInventory.hasKey){
                // ... increase the count of triggering objects.
                GetComponent.<AudioSource>().clip = accessClip;
                GetComponent.<AudioSource>().Play();
                yield WaitForSeconds (waitTime);
                Application.LoadLevel(3);
                }
       
        }
        
}

}