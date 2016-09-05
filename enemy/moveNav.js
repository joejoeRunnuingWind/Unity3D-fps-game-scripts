 	 private var player : Transform;               // Reference to the player's position.

private var enemyHealth : health;        // Reference to this enemy's health.
private var nav : NavMeshAgent;  
private var LastThinkTime : float;             // Reference to the nav mesh agent
private var ani : Animator;

var attackDistance : float;
var thinkTime : float;
var speed : float;





function Awake ()
{
    // Set up the references.
    player = GameObject.FindGameObjectWithTag ("Player").transform;
 
    enemyHealth = GetComponent (health);
    nav = GetComponent(NavMeshAgent);
    ani = GetComponent(Animator);
    LastThinkTime = 0;
}


function Update ()
{
    if(Vector3.Distance(transform.position,player.position) < attackDistance)
     {
      
        ani.Play("LocalMotion");
       
        nav.SetDestination (player.position);
        
      } 
        else
     {
   		 if(Time.time-LastThinkTime>thinkTime)
        	{
          
           LastThinkTime=Time.time;
              
           var Rnd : int = Random.Range(1,4);	     
           Debug.Log(Rnd); 	
           switch(Rnd)
           {
           		
              case 1:
              GetComponent(Rigidbody).velocity = Vector3(0,0,0);
              
              ani.Play("idle");
             
              break;
              
              case 2:
              
               GetComponent(Rigidbody).velocity = transform.forward * speed;
              ani.Play("LocalMotion");
              break;
              
              case 3:
              GetComponent(Rigidbody).velocity = -transform.forward * speed;
              ani.Play("LocalMotion");
              break;
            
            }
  	}
  	}
    if(enemyHealth.health <= 0 )
    {
        ani.Play("die");
        
    }
    
  
}