let crearElementoTr=(nombre,tipo,edad,sexo)=>{
    let tbody=document.querySelector("#tbody");
    let elTR=document.createElement("tr");
    elTR.innerHTML=`<td>${nombre}</td><td>${tipo}</td>`;
    tbody.append(elTR);
}

document.querySelector("#formulario").addEventListener("submit",e=>{    
    e.preventDefault();
    let expReg=/(^[\d]+â‚¬?$)|(^[\d]+\.[\d]+â‚¬?$)/;
    let expReg2=/^[\w ]+$/;
    let tipo = document.querySelector("#tipo").value.trim();
    let nombre = document.querySelector("#nombre").value.trim();
    let edad = document.querySelector("#edad").value.trim();
    let sexo = document.querySelector("#sexo").value.trim();

    if(expReg.test(precio) && expReg2.test(nombre))
        crearElementoTr(nombre,tipo,edad,sexo);
});