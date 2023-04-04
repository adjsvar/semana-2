// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver. 
// let hugo = 0;
// Calculamos la cantidad de monedas de Paco y Luis en función de Hugo.
// let paco = 2 * hugo;
// let luis = paco + 10;
// Sumamos las cantidades de monedas de los tres amigos 
// let total = hugo + paco + luis;



function calculaMonedas(total) {
    let hugo, paco, luis;
    // total = hugo + 2*hugo + 2*hugo + 10;
    // total = 5*hugo + 10;
    // total - 10 = 5*hugo;
    // (total -10)/5 = hugo;   
    hugo = (total - 10) / 5;
    paco = hugo * 2;
    luis = paco * 10;

    console.log(`Hugo tiene un total de: ${hugo} monedas`);
    console.log(`Paco tiene un total de: ${paco} monedas`);
    console.log(`Luis tiene un total de: ${luis} monedas`)
}

calculaMonedas(85);