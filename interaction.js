
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  var pos_init_x, pos_init_y;
  var pos_final_x, pos_final_y;
  var press = false;

	// Developper les 3 fonctions gérant les événements
   this.pression = function(evt) {
    var x = getMousePosition(canvas, evt).x;
    var y = getMousePosition(canvas,evt).y;
    console.log("x : " + x + " y : " + y);
    press =  true;
    interactor.onInteractionStart(this);
  }.bind(this);

   this.deplacement = function(evt) {
    if(press) {
      var x = getMousePosition(canvas, evt).x;
      var y = getMousePosition(canvas,evt).y;
      console.log("x : " + x + " y : " + y);
      this.pos_final_x = x;
      this.pos_final_y = y;

    }

  }.bind(this);

  this.relachement = function(evt) {
    var x = getMousePosition(canvas, evt).x;
    var y = getMousePosition(canvas,evt).y;
    console.log("x : " + x + " y : " + y);
    if(press) {
      this.pos_init_x = this.pos_final_x;
      this.pos_init_y = this.pos_final_y;
      press = false;
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown',this.pression,false);
  canvas.addEventListener('mousemove',this.deplacement,false);
  canvas.addEventListener('mouseup',this.relachement,false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



