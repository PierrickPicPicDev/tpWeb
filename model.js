
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Shapes(posx, posy, epaisseur, color) {
    this.posx = posx;
    this.posy = posy;
    this.color = color;
}

function Rectangle(posx, posy, largeur, hauteur, epaisseur, color) {
    this.largeur = largeur;
    this.hauteur = hauteur;
    Shapes.call(this,posx,posy,epaisseur,color);
}
Rectangle.prototype = new Shapes();

function Line(posx, posy, largeur, hauteur, color) {
    Shapes.call(this,posx,posy,color);
}
Line.prototype = new Shapes();

function Drawing() {
    var mesFormes = new Array();

    addShapes = function(shapes) {
        mesFormes.push(shapes);
    }.bind(this);
}