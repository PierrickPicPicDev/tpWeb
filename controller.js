
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		switch(this.currEditingMode) {
			case editingMode.rect :
			{
				var rect =  new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
				rect.paint(ctx);
				break;
			}
			case editingMode.line : {

				break;
			}
		}
	}
};


