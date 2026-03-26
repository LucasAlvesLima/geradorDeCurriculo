
function adicionarExperiencia(){
    

let container = document.getElementById("experiencias")

let bloco = document.createElement("div")

bloco.classList.add("experiencia")

bloco.innerHTML = `
<label>Empresa</label>
<input type="text" class="empresa">

<label>Cargo</label>
<input type="text" class="cargo">

<label>Período</label>
<input type="text" class="periodo">

<label>Descrição</label>
<textarea class="descricao"></textarea>
<br><br>
`

container.appendChild(bloco)




}

function adicionarFormacao(){
let container = document.getElementById("formacoes")

let bloco = document.createElement("div")

bloco.classList.add("formacao")

bloco.innerHTML = `
<hr>

<label>Curso</label><br>
<input type="text" class="curso"><br><br>

<label>Instituição</label><br>
<input type="text" class="instituicao"><br><br>

<label>Ano</label><br>
<input type="text" class="ano"><br><br>
`

container.appendChild(bloco)
}


function gerar() {
    let nome = document.getElementById('nome').value
    let endereco = document.getElementById('endereco').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let empresas = document.querySelectorAll(".empresa")
    let cargos = document.querySelectorAll(".cargo")
    let periodos = document.querySelectorAll(".periodo")
    let descricoes = document.querySelectorAll(".descricao")
    let curso = document.querySelectorAll('.curso')
    let instituicao = document.querySelectorAll('.instituicao')
    let ano = document.querySelectorAll('.ano')
    let habilidade = document.getElementById('habilidades').value


//informações pessoais
document.getElementById("c-nome").innerText = nome 
document.getElementById("c-endereco").innerText = endereco
document.getElementById("c-email").innerText = email
document.getElementById("c-telefone").innerText = telefone
// Experiencia profissionais
//document.getElementById("c-experiencia").innerHTML = empresa
//document.getElementById("c-cargo").innerHTML = cargo
//document.getElementById("c-periodo").innerHTML = periodo
//document.getElementById("c-descricao").innerHTML = descricao
let resultado = ""

for(let i = 0; i < empresas.length; i++){

resultado += `
<p><b>${empresas[i].value}</b></p>
<p>${cargos[i].value}</p>
<p>${periodos[i].value}</p>
<p>${descricoes[i].value}</p>
<br>
`

}

let resultadoFormacao = ""

for(let i = 0; i < curso.length; i++){

resultadoFormacao += `
<p><b>${curso[i].value}</b></p>
<p>${instituicao[i].value}</p>
<p>${ano[i].value}</p>
<br>
`

}

document.getElementById("c-educacao").innerHTML = resultadoFormacao
document.getElementById("c-experiencia").innerHTML = resultado

//Formação/Cursos
//document.getElementById("c-educacao").innerHTML = curso
//document.getElementById("c-instituicao").innerHTML = instituicao
//document.getElementById("c-ano").innerHTML = ano 
//Habilidades
document.getElementById("c-habilidades").innerHTML = habilidade 
console.log("Currículo gerado")

}

const element = document.getElementById("curriculo")

console.log(element) // tem que mostrar a div
console.log(element.offsetHeight) // tem que ser maior que 0


function baixarPDF(){
    gerar()

    setTimeout(()=>{
        const curriculo = document.getElementById("curriculo")
        const areaPDF = document.getElementById("area-pdf")

        // clona o currículo
        areaPDF.innerHTML = curriculo.outerHTML

        const element = areaPDF.firstChild

        // estilo limpo
        element.style.width = "800px"
        element.style.margin = "0"
        element.style.display = "block"
        element.style.background = "white"

        html2pdf().set({
            margin: 10,
            filename: "curriculo.pdf",
            html2canvas: {
                scale: 2,
                useCORS: true
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            }
        }).from(element).save()

    },1000)
}