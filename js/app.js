//PLUGIN

$(document).ready( app() );

function app() {

    $.bigBox = function(opciones) {

        opcionesPlugin = $.extend({
            icon: 'bi bi-pin-fill',
            titulo: undefined,
            texto: undefined,
            textoBtn: 'Empezar'
        }, opciones);

        const {icon, titulo, texto, textoBtn} = opcionesPlugin;

        if(!titulo || !texto) {
            alert('se necesita especificar titulo y contenido');
            return;
        }

        let contenido = "";
        contenido = '<div class="bigbox-fondo"></div>';

        contenido += `
        <div class="bigbox-container">
            <div class="bigbox-closed">
                <div>
                    <i class="bi bi-x-lg"></i>
                </div>
            </div>

            <div class="bigBox-circle">
                <i class="thumb ${icon}"></i>
            </div>

            <div class="bigBox-contenido">
                <span class="bigBox-titulo">${titulo}</span>
                <span class="bigBox-texto">${texto}</span>
            </div>

            <div class="bigbox-btns">
                <button class="bigbox-btn">${textoBtn}</button>
            </div>
        </div>
        `;

        $('body').prepend(contenido);

        animarEntrada();

        //Cerrar
        $('.bigbox-closed').on('click', function() {
            animarSalida();

            setTimeout(() => {
                removeBigbox();
            }, 1000);
        });

        //Principal
        $('.bigbox-btn').on('click', function() {
            animarSalida();

            setTimeout(() => {
                removeBigbox();
            }, 1000);
        });


        //Animar Entrada
        function animarEntrada() {
            const $fondo = $('.bigbox-fondo');
            const $bigBox = $('.bigbox-container');


            const anchoW = $(window).width();
            const altoW = $(window).height();

            const anchoB = $bigBox.width();
            const altoB = $bigBox.height();

            const calcleft = (anchoW/2) - (anchoB/2);
            const calcTop = (altoW/2) - (altoB/2);

            $bigBox.css({
                top: 0,
                left: calcleft
            });


            $fondo.fadeIn(500);

            $bigBox.fadeIn(500);
            $bigBox.animate({
                opacity: 1,
                top: calcTop
            }, 1000);
        }

        //Animar Salida
        function animarSalida() {
            const $fondo = $('.bigbox-fondo');
            const $bigBox = $('.bigbox-container');

            $fondo.fadeOut(500);
            $bigBox.fadeOut(500);
        }

        //Remover
        function removeBigbox() {
            const $fondo = $('.bigbox-fondo');
            const $bigBox = $('.bigbox-container');

            $fondo.remove();
            $bigBox.remove();
        }

    }
    
}
