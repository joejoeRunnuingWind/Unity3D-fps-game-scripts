#pragma strict
import UnityEngine.UI;

var timeManage : Text;

private var t : float;
private var lastT : float;

function Start () {

	t = 60;
	timeManage.text = t.ToString();
	lastT = 70;

}

function Update () {
	if(t > 0.0f){ 
		t = t - Time.deltaTime * 1.0f;
		timeManage.text = t.ToString();
		}
	if (t == 0.0f){
		lastT = Time.time;
		
		}
	if (t < 0.0f){
		
		timeManage.text = "GAMEOVER";
		}
	if (Time.time - lastT > Time.deltaTime * 30.0f){
			Application.LoadLevel(0);
			
		}
	
}

function ReturnMenu()
{

	Application.LoadLevel(0);

}

