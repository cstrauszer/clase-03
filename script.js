var elEncabezado = document.querySelector("header");
var elColor, digimon;

function preload() {
    digimon = loadJSON("https://digimon-api.vercel.app/api/digimon");
}

function setup() {

//createCanvas(windowWidth, windowHeight).position(0,0).style("z-index", "-1");
// noStroke();

    //hago algo con lo que precargué
    var lasOpciones = [];

Object.values(digimon).forEach((p) => {
    if(p.level == "Fresh"){
        lasOpciones.push(p.img)}});

   //digimon.results.forEach((p) => lasOpciones.push(p.name));
    console.log(lasOpciones);
    //selecciono el elemento con esta identidad
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
    //selecciono el elemento con esta identidad    
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
   // createElement("h1", "Haz un dibujo de :" + random(lasOpciones) + "</span>").parent(elEncabezado).id("title");
   createElement("h1", "Haz un dibujo de : ").parent(elEncabezado).id("title");
   createImg(random(lasOpciones), "...").addClass ('chiqui');
createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#eceff1");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_atacazo_artistico", "jpg");
}

function borrador() {
    background("#eceff1");
}
