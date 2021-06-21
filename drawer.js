var Color_Value = "#6effbb";
var PB_i = "#fad1ff";
let color_text, input;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(0,208,255));
  noStroke();
  input = createInput();
  input.position(0, 0);
  input.size(60,10);
  input.style('font-size', '5px');

  button = createButton('▷');
  button.position(60, 0);
  button.style('font-size', '5px');
  button.style('text-align', 'center');
  button.size(10,10);
  button.mousePressed(Background_color);
//
  PB = createInput();
  PB.position(0, 10);
  PB.size(60,10);
  PB.style('font-size', '5px');
  PB_button = createButton('▷');
  PB_button.position(60, 10);
  PB_button.style('font-size', '5px');
  PB_button.style('text-align', 'center');
  PB_button.size(10,10);
  PB_button.mousePressed(Paintbrush_Color);
//
  Save_Button = createButton('Save');
  Save_Button.position(0,20);
  Save_Button.size(60,20);

  Save_Button.mousePressed(save_image);
//

}

function Background_color() {
  Color_Value = input.value();
  background(Color_Value);
}

function Paintbrush_Color(){
  PB_i = PB.value();
}

function save_image(){
  save("image.png"); 
}

function draw() {

  if(mouseIsPressed){
      let Color = color(PB_i);
      fill(Color);
      circle(mouseX,mouseY,5);
  }
}
