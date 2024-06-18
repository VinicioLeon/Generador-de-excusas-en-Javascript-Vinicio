let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generarexcusa () {
    const quien = who[Math.floor(Math.random() * 4)];
    const accion = action[Math.floor(Math.random() * 4)];
    const que = what[Math.floor(Math.random() * 3)];
    const cuando = when[Math.floor(Math.random() * 5)];
    const resultado = who + action + what + when
    return (resultado)
}
console.log(generarexcusa())





