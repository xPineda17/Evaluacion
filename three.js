let num = parseInt(prompt('Ingrese el numero: '));
let datos = [];

for(let x = num; x > 1; x--){
    let a = x * num;
    datos.push(a);
}
console.log(datos)