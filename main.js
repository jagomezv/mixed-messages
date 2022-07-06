// Arreglos que contienen las palabras
const verbos = ['cantas', 'corres', 'saltas', 'gritas', 'trabajas', 'piensas', 'amas', 'lees', 'juegas'];
const antonimos = [['alto', 'bajo'], ['rapido', 'lento'], ['fuerte', 'suave'], ['lindo', 'feo'], ['caliente', 'frio'], ['exagerado', 'moderado'], ['sucio', 'limpio']];

// Funciones
function elegirVerboAleatorio() {
    return verbos[Math.floor(Math.random() * (verbos.length + 1))];
}
function elegirAntonimoAleatorio() {
    return antonimos[Math.floor(Math.random() * (antonimos.length + 1))];
} 
function mixedMessage() {
    let verbo = elegirVerboAleatorio();
    let antonimosArray = elegirAntonimoAleatorio()
    let antonimo1 = antonimosArray[0];
    let antonimo2 = antonimosArray[1];
    let random = Math.floor(Math.random() * 2)
    if (random === 1) {
        console.log(`${verbo} muy ${antonimo1}. Entonces, ${verbo.substring(0, verbo.length - 1)} más ${antonimo2}.`);
    }
    else {
        console.log(`${verbo} muy ${antonimo2}. Entonces, ${verbo.substring(0, verbo.length - 1)} más ${antonimo1}.`);

    }
}

mixedMessage();