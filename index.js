const subtotal = document.querySelector("#subtotal")
const recargo = document.querySelector("#recargo")
const descuento = document.querySelector("#descuento")
const envio = document.querySelector("#envio")
const total = document.querySelector("#total")

const opcionesDePago = document.querySelectorAll(".opcionesDePago")

const efectivo = document.querySelector("#efectivo")
const credito = document.querySelector("#credito")
const envioOpcion = document.querySelector("#envioCheck")
const tarjetaDescuento = document.querySelector("#descuentoCheck")
 


let subtotalNumero = Number(subtotal.dataset.precio)


subtotal.textContent = 5540

for (let opcion of opcionesDePago) {
    opcion.oninput = () => {
        calcularTotal()
    }
}



let resultadoRecargo 

const recargoTarjeta = () => {
    resultadoRecargo =  subtotalNumero * 0.1 
    recargo.textContent = resultadoRecargo
    return resultadoRecargo
}

let resultadoEnvio

const recargoEnvio = () => {
    resultadoEnvio =  50
    envio.textContent = resultadoEnvio
    return resultadoEnvio
}

let resultadoDescuento

const aplicarDescuento = () => {
    resultadoDescuento = - subtotalNumero * 0.1
    descuento.textContent = resultadoDescuento
    return resultadoDescuento
}

const calcularTotal = () => {
    
    if (credito.checked) {
        resultadoRecargo = recargoTarjeta()

    }
    else {
        resultadoRecargo = 0
        recargo.textContent = resultadoRecargo
    }
    if (envioOpcion.checked) {
        resultadoEnvio = recargoEnvio()
    }
    else {
        resultadoEnvio = 0
        envio.textContent = resultadoEnvio

    }
    if (tarjetaDescuento.checked) {
        resultadoDescuento = aplicarDescuento()
    }
    else {
        resultadoDescuento = 0
        descuento.textContent = resultadoDescuento
    }
    
    let totalReal = subtotalNumero + resultadoEnvio + resultadoRecargo + resultadoDescuento
    total.textContent = totalReal
    return totalReal
}




