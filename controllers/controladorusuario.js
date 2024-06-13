console.log("hola")
let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    Headers:{}    
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila1=document.getElementById("fila1")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        

        let nombreUsuario=document.createElement("h3")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombres

        let correoUsuario=document.createElement("h3")
        correoUsuario.classList.add("text-center")
        correoUsuario.textContent=usuario.correo

        let cedulaUsuario=document.createElement("h3")
        cedulaUsuario.classList.add("text-center")
        cedulaUsuario.textContent=usuario.cedula
        
        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(cedulaUsuario)
        tarjeta.appendChild(correoUsuario)
        columna.appendChild(tarjeta)
        fila1.appendChild(columna)

        
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})