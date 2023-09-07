let sueldo = parseInt(prompt('Ingrese su sueldo: '));
let boni_men = parseInt(prompt('Cantidad de bonificacion mensual: '));
let calculo = (sueldo * 12) + (boni_men * 12);

let result = alert('Su sueldo anual es de: ' + calculo);