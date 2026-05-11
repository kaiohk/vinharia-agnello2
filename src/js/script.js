let nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10;
let tipo1, tipo2, tipo3, tipo4, tipo5, tipo6, tipo7, tipo8, tipo9, tipo10;
let safra1, safra2, safra3, safra4, safra5, safra6, safra7, safra8, safra9, safra10;
let quant1, quant2, quant3, quant4, quant5, quant6, quant7, quant8, quant9, quant10;

let total = 0;

function validarTexto(campo) {
    let valor = prompt(`Digite o ${campo} do vinho: `);
    while (!valor || valor.trim() === "") {
        alert("ERRO: Tente novamente");
        valor = prompt(`Digite o ${campo} do vinho: `);
    }
    return valor.trim();
}

function validarNumero(campo) {
    let valor = parseInt(prompt(`Digite ${campo}: `));
    while (isNaN(valor) || valor < 0) {
        alert("ERRO: Tente novamente");
        valor = parseInt(prompt(`Digite ${campo}: `));
    }
    return valor;
}

function estoqueEstaBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    if (safra <= 3) return "Jovem";
    if (safra <= 10) return "Amadurecido";
    return "Antigo";
}

function exibirVinho(nome, tipo, safra, quantidade) {
    let classificacao = classificarVinho(safra);
    let estoque = estoqueEstaBaixo(quantidade) ? "Estoque baixo" : "Estoque Normal";

    alert("Cadastro realizado! Veja os detalhes do vinho no console.");
    console.log(`Nome do vinho: ${nome}`);
    console.log(`Tipo do vinho: ${tipo}`);
    console.log(`Safra do vinho: ${safra} anos (${classificacao})`);
    console.log(`Quantidade do vinho: ${quantidade} | ${estoque}`);
}

window.onload = function () {

    let continuar = true;

    while (continuar && total < 10) {
        total++;

        let nome = validarTexto("nome");
        let tipo = validarTexto("tipo");
        let safra = validarNumero("a safra (idade em anos)");
        let quantidade = validarNumero("a quantidade em estoque");

        if (total === 1)  { nome1  = nome; tipo1  = tipo; safra1  = safra; quant1  = quantidade; }
        if (total === 2)  { nome2  = nome; tipo2  = tipo; safra2  = safra; quant2  = quantidade; }
        if (total === 3)  { nome3  = nome; tipo3  = tipo; safra3  = safra; quant3  = quantidade; }
        if (total === 4)  { nome4  = nome; tipo4  = tipo; safra4  = safra; quant4  = quantidade; }
        if (total === 5)  { nome5  = nome; tipo5  = tipo; safra5  = safra; quant5  = quantidade; }
        if (total === 6)  { nome6  = nome; tipo6  = tipo; safra6  = safra; quant6  = quantidade; }
        if (total === 7)  { nome7  = nome; tipo7  = tipo; safra7  = safra; quant7  = quantidade; }
        if (total === 8)  { nome8  = nome; tipo8  = tipo; safra8  = safra; quant8  = quantidade; }
        if (total === 9)  { nome9  = nome; tipo9  = tipo; safra9  = safra; quant9  = quantidade; }
        if (total === 10) { nome10 = nome; tipo10 = tipo; safra10 = safra; quant10 = quantidade; }

        exibirVinho(nome, tipo, safra, quantidade);

        if (total < 10) {
            let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");
            continuar = resposta !== null && resposta.trim().toLowerCase() === "s";
        } else {
            alert("Limite máximo de 10 vinhos atingido!");
            continuar = false;
        }
    }
    let estoqueBaixo = 0;
      let nomeMaisAntigo = nome1;
      let safraMaisAntiga = safra1;

      if (total >= 1 && estoqueEstaBaixo(quant1))  estoqueBaixo++;
      if (total >= 2 && estoqueEstaBaixo(quant2))  estoqueBaixo++;
      if (total >= 3 && estoqueEstaBaixo(quant3))  estoqueBaixo++;
      if (total >= 4 && estoqueEstaBaixo(quant4))  estoqueBaixo++;
      if (total >= 5 && estoqueEstaBaixo(quant5))  estoqueBaixo++;
      if (total >= 6 && estoqueEstaBaixo(quant6))  estoqueBaixo++;
      if (total >= 7 && estoqueEstaBaixo(quant7))  estoqueBaixo++;
      if (total >= 8 && estoqueEstaBaixo(quant8))  estoqueBaixo++;
      if (total >= 9 && estoqueEstaBaixo(quant9))  estoqueBaixo++;
      if (total >= 10 && estoqueEstaBaixo(quant10)) estoqueBaixo++;

      if (total >= 2  && safra2  > safraMaisAntiga) { safraMaisAntiga = safra2;  nomeMaisAntigo = nome2;  }
      if (total >= 3  && safra3  > safraMaisAntiga) { safraMaisAntiga = safra3;  nomeMaisAntigo = nome3;  }
      if (total >= 4  && safra4  > safraMaisAntiga) { safraMaisAntiga = safra4;  nomeMaisAntigo = nome4;  }
      if (total >= 5  && safra5  > safraMaisAntiga) { safraMaisAntiga = safra5;  nomeMaisAntigo = nome5;  }
      if (total >= 6  && safra6  > safraMaisAntiga) { safraMaisAntiga = safra6;  nomeMaisAntigo = nome6;  }
      if (total >= 7  && safra7  > safraMaisAntiga) { safraMaisAntiga = safra7;  nomeMaisAntigo = nome7;  }
      if (total >= 8  && safra8  > safraMaisAntiga) { safraMaisAntiga = safra8;  nomeMaisAntigo = nome8;  }
      if (total >= 9  && safra9  > safraMaisAntiga) { safraMaisAntiga = safra9;  nomeMaisAntigo = nome9;  }
      if (total >= 10 && safra10 > safraMaisAntiga) { safraMaisAntiga = safra10; nomeMaisAntigo = nome10; }

      alert(`Relatório Final\nTotal de vinhos cadastrados: ${total}\nVinhos com estoque baixo: ${estoqueBaixo}\nVinho com safra mais antiga: ${nomeMaisAntigo} (${safraMaisAntiga} anos)`);
};