let vec = [];
let cant = parseInt(prompt('Cantidad de elementos en el vector: '));
let suma = 0;

for(x = 1; x <= cant; x++){
    let num = parseInt(prompt('Ingrese un numero: '))
    vec.push(num);
}
console.log(vec);