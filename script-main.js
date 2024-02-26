function encriptar(texto){
    const VOCALES = 'aeiou';
    const reemplazos = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    };
    let textoEncriptado = '';
    for (const LETRA of texto){
        if (VOCALES.includes(LETRA)){
            textoEncriptado += reemplazos[LETRA];
        }
        else{
            textoEncriptado += LETRA;
        }
    }
    return textoEncriptado;
}

function validarTexto(texto){
    const EXPRESIONR = /^[a-z\s]+$/u;
    return EXPRESIONR.test(texto);
}