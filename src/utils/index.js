export const valorCarta = (carta) =>{
    let valor = carta.replace('C', '');
        valor = valor.replace('D', '');
        valor = valor.replace('H', '');
        valor = valor.replace('S', '');
        valor = valor.replace(' ', '');
        return valor;
}