const fontColor = '#bada55';
const titleFontSize = '500%';
const textFontSize = '200%';

(function(){
    console.log('%c¡Hola!', 'color: ' + fontColor + '; font-size: ' + titleFontSize + ';');
    console.log('%cParece que has llegado hasta la consola de desarrolladores para desentrañar mis secretos... Pero no será tan sencillo...', 'color: ' + fontColor + '; font-size: ' + textFontSize + ';');
    console.log('%cAl menos, devuélveme el saludo.', 'color: ' + fontColor + '; font-size: ' + textFontSize + ';');
})();

function hola(){
    console.log('%cEso está mejor, un poco de educación. Para continuar con la caza ve a https://caza-codigos.herokuapp.com/css/css1.html', 'color: ' + fontColor + '; font-size: ' + textFontSize + ';');
}