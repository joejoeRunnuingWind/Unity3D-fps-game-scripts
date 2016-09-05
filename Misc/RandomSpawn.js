#pragma strict
var hazard : GameObject;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;



function Start () {
    SpawnWaves ();
}

function SpawnWaves () {
	var spawnValues : Vector3;
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < hazardCount; i++)
        {
             var spawnPosition : Vector3= new Vector3 (Random.Range (-9,21), 0.5, Random.Range (-34,-23));
             var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (hazard, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}

