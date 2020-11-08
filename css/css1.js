(function () {
    const fontColor = '#bada55';
    const textFontSize = '200%';

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutationRecord) {
            if (mutationRecord.attributeName !== 'style') {
                return;
            }

            const header = document.getElementById('header');

            if (header.style.color !== 'white') {
                return;
            }

            console.log('%c¡¡Perfecto!! Ahora estoy en blanco... y tengo otra tarea para ti... ve a ', 'color: ' + fontColor + '; font-size: ' + textFontSize + ';');
        });
    });

    const target = document.getElementById('header');
    observer.observe(target, { attributes: true });
})();