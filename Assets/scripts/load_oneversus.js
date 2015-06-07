#pragma strict
// This script just lets the menu act as a scene swapper. 
function StartGame() {
	Application.LoadLevel("two player");
}
function ExitGame(){
	Application.Quit();
}

