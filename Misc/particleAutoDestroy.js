var life : float;
private var destroyTime : float;

function Start(){
	destroyTime = Time.time + life;
}

function Update () {
	if(Time.time > destroyTime){
		Destroy(gameObject);
	}
	if(Time.time > destroyTime - GetComponent.<ParticleEmitter>().maxEnergy){
		GetComponent.<ParticleEmitter>().emit = false;
	}
}