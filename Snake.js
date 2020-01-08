let bleu= $('.bleu')
let rouge= $('#rouge')

$('#monID').keydown(maFonction);




//Flèches

function quelleTouche( e ){
   if ( e.which == 39 ){
      console.log( 'flèche droite' );
   }
   if ( e.which == 37 ){
      console.log( 'flèche gauche' );
   }
   if ( e.which == 38 ){
      console.log( 'flèche haut' );
   }
   if ( e.which == 40 ){
      console.log( 'flèche bas' );
   }
}
$(document).keydown(quelleTouche);



