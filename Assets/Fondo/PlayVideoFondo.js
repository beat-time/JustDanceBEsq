#pragma strict

var movTexture : MovieTexture;

function Update(){
        movTexture.loop = true;
        GetComponent.<Renderer>().material.mainTexture = movTexture; // Se indica que la textura se asigna a esa variable
        movTexture.Play();
}
