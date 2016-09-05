import UnityEngine.UI;

var soldier : GameObject;
var soldierPrefab : GameObject;
var sentryGun : GameObject;
var sentryGunPrefab : GameObject;
var resetMenu : boolean = false;
var menu1 : GUIText;
var menu2 : GUIText;
var scoreText : Text;
var gameText : Text;

private  var score : int;
public var position : Vector3 = new Vector3(1000f, 1000f, 1000f);       // The last global sighting of the player.
public var resetPosition : Vector3 = new Vector3(1000f, 1000f, 1000f);  // The default position if the player is not in sight.


function Start(){
	Screen.lockCursor = true;
	Cursor.visible = false;
	score = 0;
    UpdateScore ();

}
function Update () {
	if (Input.GetKey ("escape")) {
		Application.Quit();
	}
	
	if(Input.GetKeyDown(KeyCode.B)){
		Debug.Break();
	}
	if(Input.GetKeyDown(KeyCode.R)){
		resetMenu = true;
	}
	if(resetMenu){
		menu1.text = "Reset menu:";
		menu2.text = "(1) Reset soldier. (2) Retrun to menu.(3)Misson1";
		if(Input.GetKeyDown(KeyCode.Alpha1)){
			 MissionOne();
			 resetMenu = false;
		}
		if(Input.GetKeyDown(KeyCode.Alpha2)){
			 Application.LoadLevel(0);
			 resetMenu = false;
		}
		if(Input.GetKeyDown(KeyCode.Alpha3)){
			 Application.LoadLevel(2);
			 resetMenu = false;
		}
	}
	else{
		menu1.text = "Soldier scripts v1";
		menu2.text = "(Under development:SUN AIWEI/JIAO SHIHAO";
	}
	Screen.lockCursor = true;
}
function UpdateScore () {
    scoreText.text = "Score: " + score;
}


 


function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function MissionOne(){
	
	Destroy(soldier);
	soldier = Instantiate(soldierPrefab,Vector3.zero,Quaternion.identity);
	soldier.name = "soldier3rdPerson"; //This is so the sentry gun will recognize & shoot him.
	soldier.tag="Player";

}

function MissionTwo(){
	gameText.text = "Missing 2 start";
	scoreText.text="Score:";
	Destroy(soldier);
	soldier = Instantiate(soldierPrefab,Vector3.zero,Quaternion.identity);
	soldier.name = "soldier3rdPerson"; //This is so the sentry gun will recognize & shoot him.
	soldier.tag="Player";	
	}
	
function MissionThree(){
	gameText.text = "Missing 3 start";
	scoreText.text="Score:";
	Destroy(soldier);
	soldier = Instantiate(soldierPrefab,Vector3.zero,Quaternion.identity);
	soldier.name = "soldier3rdPerson"; //This is so the sentry gun will recognize & shoot him.
	soldier.tag="Player";	
	}
	