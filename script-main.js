//FUNCIONES
function encriptar(texto){
    const VOCALES = 'aeiou';
    const REEMPLAZOS = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    };
    let textoEncriptado = '';
    for (const LETRA of texto){
        if (VOCALES.includes(LETRA)){
            textoEncriptado += REEMPLAZOS[LETRA];
        }
        else{
            textoEncriptado += LETRA;
        }
    }
    return textoEncriptado;
}
function desencriptar(texto){
    const REEMPLAZOS = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u'
    };
    let textoDesencriptado = texto;

    for (const CLAVE in REEMPLAZOS){
        if (REEMPLAZOS.hasOwnProperty(CLAVE)) {
            const VOCAL = REEMPLAZOS[CLAVE];
            textoDesencriptado = textoDesencriptado.replace(CLAVE, VOCAL);
        }
    }
    return textoDesencriptado;
}

function validarTexto(texto){
    const EXPRESIONR = /^[a-z\s]+$/u;
    return EXPRESIONR.test(texto);
}

function transformar(tipo){
    const CAMPODETEXTO = document.getElementById('campo_de_texto');
    const CAJARESULTADO = document.getElementById('caja_r');
    const TEXTOINGRESADO = CAMPODETEXTO.value;

    if (validarTexto(TEXTOINGRESADO)) {
        let contenedorTextoEncriptado = document.createElement('div');
        let textoEncriptado = document.createElement('p');
        let btnCopiar = document.createElement('button');
        let contenedor_msg_error = document.querySelector('.contenedor_msg_error');
        if (contenedor_msg_error){
            contenedor_msg_error.remove();
            CAMPODETEXTO.style.marginBottom = '40px';
        }

        btnCopiar.id = 'btn_copiar';
        btnCopiar.innerText = 'Copiar';
        btnCopiar.addEventListener('click', function() {
            let resultado = document.querySelector('.texto_resultado');
            const TEXTORESULTADO = resultado.textContent;
            navigator.clipboard.writeText(TEXTORESULTADO).then(function(){
            })
            .catch(function(err) {
                console.error('Error al copiar la transcripcion.');
            });
        });

        contenedorTextoEncriptado.className = 'contenedor_texto_resultado';

        CAJARESULTADO.innerHTML = '';
        textoEncriptado.className = 'texto_resultado';
        if (tipo === 'encriptar'){
            textoEncriptado.textContent = encriptar(TEXTOINGRESADO);
        }else{
            textoEncriptado.textContent = desencriptar(TEXTOINGRESADO);
        }

        CAJARESULTADO.appendChild(contenedorTextoEncriptado);
        contenedorTextoEncriptado.appendChild(textoEncriptado);
        CAJARESULTADO.appendChild(btnCopiar);
        CAMPODETEXTO.value = '';
    }else{
        if (TEXTOINGRESADO !== ''){
            let contenedor_msg_error = document.querySelector('.contenedor_msg_error');
            let imagenTextoVacio = document.getElementById('imagen_vacio');

            if(!contenedor_msg_error){
                contenedorMsgError = document.createElement('div');
                contenedorMsgError.className = 'contenedor_msg_error';
                contenedorMsgError.innerHTML = `
                <img src="img/bi_exclamation-circle-fill.png" alt="">
                <p>Solo letras minusculas y sin acento.</p>`;

                CAMPODETEXTO.style.marginBottom = '0';
                CAMPODETEXTO.insertAdjacentElement('afterend', contenedorMsgError);
            }
            if (imagenTextoVacio !== null){
                let msgInfo = document.getElementById('msg_info');
                msgInfo.textContent = 'El mensaje ingresado tiene un error';
            }else{
                CAJARESULTADO.innerHTML = '';
                CAJARESULTADO.innerHTML = `
                <img src="img/Muñeco.png" id="imagen_vacio" alt="">
                <div class="resultado">
                    <h3 id="msg_info">El mensaje ingresado tiene un error</h3>
                    <p class="consejo">Ingresa el texto que desees encriptar o desencriptar</p>
                </div>`;
            }
        }else{
            let imagenTextoVacio = document.getElementById('imagen_vacio');
            let contenedor_msg_error = document.querySelector('.contenedor_msg_error');

            if (contenedor_msg_error){
                contenedor_msg_error.remove();
                CAMPODETEXTO.style.marginBottom = '40px';
            }
            if (imagenTextoVacio===null){
                CAJARESULTADO.innerHTML = '';
                CAJARESULTADO.innerHTML = `
                <img src="img/Muñeco.png" id="imagen_vacio" alt="">
                <div class="resultado">
                    <h3 id="msg_info">Ningún mensaje fue encontrado</h3>
                    <p class="consejo">Ingresa el texto que desees encriptar o desencriptar</p>
                </div>`;
            }else{
                alert("pase por aqui");
                let msgInfo = document.getElementById('msg_info');
                msgInfo.textContent = 'Ningún mensaje fue encontrado';
            }
        }
    }
}
//MANIPULACION DE BOTONES
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
});
document.getElementById('btn-encriptar').addEventListener('click', function() {
    transformar('encriptar');
});
document.getElementById('btn-desencriptar').addEventListener('click', function() {
    transformar('desencriptar');
});