
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.rect(this.posx,this.posy,this.hauteur,this.largeur);
    ctx.stroke();
}
