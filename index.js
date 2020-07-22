function buscar() {

    var cancelamento = document.getElementById('cancelamento')
    let buscar = Number(cancelamento.value)
    let result = document.getElementById('res')
    let listagem = document.getElementById('listagem')
    let table = document.getElementById('table')

    const procurar = lista.find(obj => obj.cancelamento === buscar)//buscar 
    /*
    console.log( procurar )   
    console.log(`lista ${lista}`)
    console.log(buscar)
    console.log(lista[0].atendimento)
    console.log("testando" + typeof(procurar))
    console.log("testando" + typeof(lista))*/
    
    if (procurar == undefined) {
        listagem.innerText = "Cancelamento não localizado!"
        var div = document.getElementById('div')
        div.style.display = 'none';
        cancelamento.focus()
    }
    if (procurar != undefined && procurar.status == '') {
        listagem.innerText = "Cancelamento em Analise!"
        var div = document.getElementById('div')
        div.style.display = 'none';
    } else {

        document.getElementById('loja').innerText = "Loja"
        document.getElementById('cancelamentoTabela').innerText = "Cancelamento"
        document.getElementById('atendimento').innerText = "Atendimento"
        document.getElementById('status').innerText = "Status"

        var lojaRes = document.getElementById("lojaRes")
        var cancelamentoRes = document.getElementById('cancelamentoRes')
        var atendimentoRes = document.getElementById("atendimentoRes")
        var statusRes = document.getElementById("statusRes")

        document.getElementById('lojaRes').innerText = procurar.loja
        document.getElementById('cancelamentoRes').innerText = procurar.cancelamento
        document.getElementById('atendimentoRes').innerText = procurar.atendimento
        document.getElementById('statusRes').innerText = procurar.status

        if (procurar.status == "Aguardando Filial") {
            statusRes.style.backgroundColor = '#FF0000';
        } else { statusRes.style.backgroundColor = '#32CD32'; }

        listagem.innerText = " "
        var div = document.getElementById('div')
        div.style.display = 'block';
        cancelamento.focus()
        cancelamento.innerHtml = " "
    }
}

var button = document.getElementById('button')
function mudaBackground() {
    thead.style.backgroundColor = "rgb(85, 167, 221)";
    thead.style.border = "2px solid black";
    lojaRes.style.border = "2px solid black";
    cancelamentoRes.style.border = "2px solid black";
    atendimentoRes.style.border = "2px solid black";
    statusRes.style.border = "2px solid black";

    document.getElementById('loja').style.border = "2px solid black";
    document.getElementById('cancelamentoTabela').style.border = "2px solid black";
    document.getElementById('atendimento').style.border = "2px solid black";
    document.getElementById('status').style.border = "2px solid black";
}






