var hazard : GameObject;
var spawnValues : Vector3;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;

function Start () {
    SpawnWaves ();
}




function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < hazardCount; i++)
        {
             var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), Random.Range (spawnValues.y, spawnValues.y +20f), Random.Range (-spawnValues.z, spawnValues.z));
             var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (hazard, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}