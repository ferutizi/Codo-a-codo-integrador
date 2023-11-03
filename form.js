const formulario = document.getElementById('formulario');
const cantidad = formulario.amount;
const categoria = formulario.category;
const totalPago = document.getElementById('totalPago');
const btnResumen = document.getElementById('btnResumen')
const btnBorrar = document.getElementById('btnBorrar');
const valor = 200;
let descuento = 1;
let total = 0;
let span = document.createElement('span')

btnBorrar.addEventListener('click', () => {
    totalPago.removeChild(span)
})

btnResumen.addEventListener('click', () => {
    switch (categoria.value) {
        case '1':
            /* 80% */
            descuento = 0.2
            break;
        case '2':
            /* 50% */
            descuento = 0.5
            break;
        case '3':
            /* 15% */
            descuento = 0.85
            break;
        default:
            descuento = 1
            break;
    }
    total = valor * cantidad.value * descuento;
    span.textContent = total
    totalPago.appendChild(span)
})