const btnVerificar = document.querySelector("#btn-verificar")
console.log(btnVerificar)
btnVerificar.addEventListener('click', ()=>{
    console.log("clicou!!")

    const valor = document.querySelector("input")

    console.log(valor.value)

    const numero = Number(valor.value)

    const h2 = document.querySelector("h2")

    if(numero % 2 == 0)
       h2.innerText = `O número ${numero} é par`
    else
    h2.innerText = `O número ${numero} é impar`

    const resultado = document.querySelector("#resultado")

    resultado.classList.remove("hide")

    const main = document.querySelector("#main")

    main.classList.add("hide")

    valor.value = ""
})