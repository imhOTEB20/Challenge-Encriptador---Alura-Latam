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
//INTERACCION CON EL DOM
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
});
document.getElementById('btn-encriptar').addEventListener('click', function() {
    const TEXTOINGRESADO = document.getElementById('campo_de_texto').value;

    if (validarTexto(TEXTOINGRESADO)) {
        const CAJARESULTADO = document.getElementById('caja_r');

        CAJARESULTADO.innerHTML = '';
        let resultado = document.createElement('p');
        resultado.className = 'texto_resultado';
        resultado.textContent = encriptar(TEXTOINGRESADO);
        CAJARESULTADO.style.justifyContent = 'normal';
        CAJARESULTADO.appendChild(resultado);
    }

});