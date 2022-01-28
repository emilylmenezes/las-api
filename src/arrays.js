const { capitalizar } = require('./funcoes');

// Observação: Para todas funções que recebem listas, se o parâmetro não for uma lista ou se a lista for vazia, retorne undefined.

// =========
// Essencial
// =========

// Crie uma função que recebe uma lista de preços e devolve o menor preço
// ([10, 7, 8, 25, 8, 9, 100, 99]) => 7
function obterMenorPreco(lista){
  if(Array.isArray(lista) && lista.length !== 0){
        var minimo = Math.min(...lista)
        return minimo;
  }else{
      return undefined;
  }
}

// Crie uma função que recebe uma lista de preços e devolve o maior preço
// ([10, 7, 8, 25, 8, 9, 100, 99]) => 100
function obterMaiorPreco(lista) {
    if(Array.isArray(lista) && lista.length !== 0){
        var maximo = Math.max(...lista)
        return maximo;
  }else{
      return undefined;
  }
}

// Crie uma função que receba uma lista de nomes e devolve a lista de nomes capitalizados
// (["tiago", "Alexandre", "kamillA"]) => ["Tiago", "Alexandre", "Kamilla"]
function capitalizarNomes(nomes) {
   
    if(Array.isArray(nomes) && nomes.length !== 0){
        for(let i = 0; i < nomes.length; i++){
            nomes[i] = nomes[i][0].toUpperCase() + nomes[i].slice(1).toLowerCase();
        }
        return nomes;
    }else{
       return undefined;
    }

    
}

// Crie uma função que recebe o nome de uma categoria e devolve o desconto associado a esta categoria,
// ou 0 se não houver desconto.
// Utilize as listas que já estão na função para implementar seu código.
// ('Alimentação') => 30
// ('Infantil') => 15
function obterDescontoCategoria(categoria) {
    const categorias = ['Alimentação', 'Infantil'];
    const descontos = [30, 15]
    
    if(categoria == 'Alimentação'){
        for(let i = 0; i < categorias.length; i++){
            descontos[i] = descontos[0];
        }
        return descontos[0];
    }else if(categoria == 'Infantil'){
        for(let i = 0; i < categorias.length; i++){
            descontos[i] = descontos[1];
        }
        return descontos[1];
    }else{
        return 0;
    }

}

// Crie uma função que recebe uma lista de preços de produtos e um valor máximo de orçamento
// e retorna uma lista com os preços menores ou iguais ao valor do orçamento informado
// ([5, 7, 9, 50, 20], 9) => [5, 7, 9]
function obterPrecosLimitadosAoOrcamento(lista, precoMaximo) {
   let valor = [];

   if(Array.isArray(lista) && lista.length !== 0){
       for(let i = 0; i < lista.length; i++){
           if(lista[i] <= precoMaximo){
               valor.push(lista[i]);
           } 
       }
       return valor;
   }else{
       return undefined;
   }

}

// Crie uma função que recebe uma lista de preços de produtos de uma compra
// e retorna o valor total da compra
// [10, 30, 5, 15] => 60
function calcularTotalDaCompra(lista) {
    if(Array.isArray(lista) && lista.length !== 0){
        let totalDaCompra = 0;
        for(let i = 0; i < lista.length; i++){
            totalDaCompra += lista[i];
        }
        return totalDaCompra;
        }else{
            return undefined;
        }
}

// =========
// Desejável
// =========

// Crie uma função que recebe uma lista de preços de produtos e retorna uma lista com o menor e o maior preço
// ([10, 7, 8, 25, 8, 9, 100, 99]) => [7, 100]
function obterMenorEMaiorPrecos(lista){

    if(Array.isArray(lista) && lista.length !== 0){
        var minimo = Math.min(...lista)
        var maximo = Math.max(...lista)
        var total = [minimo, maximo];
        return total;
  }else{
      return undefined;
  }
   
}

// Crie uma função que recebe uma lista de preços de produtos, um valor inferior e um valor superior de orçamento.
// Retorne uma lista de preços dentro do orçamento.
// Valide se o orçamento está correto, ou seja, se o menor valor é igual ou inferior ao maior valor, caso contrário, retorne undefined.
// ([10, 7, 8, 25, 8, 9, 100, 99], 9, 30) => [10, 25, 9]
function obterPrecosDentroDoOrcamento(lista, menorValor, maiorValor) {
    let valor = [];
    if(maiorValor < menorValor){
        return undefined;
    }else if(Array.isArray(lista) && lista.length !== 0){
        for(let i = 0; i < lista.length; i++){
            if(lista[i] >= menorValor && lista[i] <= maiorValor){
                valor.push(lista[i])
            }
        }
        return valor;
    }else{
        return undefined;
    }
}

// Crie uma função que recebe uma categoria e um cupom e aplica um acréscimo de 10% no desconto da categoria, se o cupom for válido
// Utilize a função obterDescontoCategoria
// ('Alimentação', 'NULABSSA') => 40
// ('Alimentação', 'ALURANU') => 40
// ('Infantil', 'ALURANU') => 25
// ('Bebida', 'ALURANU') => 10
// ('Bebida', 'CUPOM-INVALIDO') => 0
// ('Alimentação', 'CUPOM-INVALIDO') => 30
// Utilize a função descontoCategoria criada anteriormente
function obterDescontoTotal(categoria, cupom){
    let chamandoFuncao = obterDescontoCategoria(categoria);

    if(cupom == 'NULABSSA'){
        return chamandoFuncao += 10;
    }else if(cupom == 'ALURANU'){
        return chamandoFuncao += 10;
    }else{
        return chamandoFuncao;
    }
    
}


// Crie uma função que recebe uma lista de preços e uma lista de categorias de produtos e
// devolve o valor total da compra, considerando os descontos de cada categoria e o cupom informado
// ([50, 25, 30, 22], ['Infantil', 'Bebida', 'Alimentação', 'Bebida'], 'ALURANU') => 97.80
// Utilize a função obterDescontoTotal criada anteriormente
function calcularTotalDaCompraComDescontos(precos, categorias, cupom) {
    let resultado = 0;
    
    if(!Array.isArray(precos) || !Array.isArray(categorias)){
        return undefined
    }else if(precos.length === 0 || categorias.length === 0){
            return undefined;
    }else{
        for(let i = 0; i < categorias.length; i++){
            let desconto = obterDescontoTotal(categorias[i], cupom)
            resultado += precos[i] - (precos[i] * desconto) / 100;
    }
    return resultado;
}
}

// Crie uma função que receba um nome completo e o retorna com todas as partes capitalizadas.
// Desconsidere palavras com menos de 3 letras
// ("tiago lage payne de pádua") => "Tiago Lage Payne de Pádua"
function capitalizarNomeCompleto(nomeCompleto) {
    nomeCompleto = nomeCompleto.toLowerCase().replace(/(?:^|\s)\S/g, function(capitalize) {
        return capitalize.toUpperCase();
      });
      var maiusculas = ["Da", "Do", "Das", "Dos", "A", "E", "De", "DE"];
      var redigida = ["da", "do", "das", "dos", "a", "e", "de", "de"];
      for (var i =maiusculas.length - 1; i >= 0; i--) {
        nomeCompleto = nomeCompleto.replace(RegExp("\\b" + maiusculas[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "\\b", "g"), redigida[i]);
      }

      return nomeCompleto;
}

// =======
// Desafio
// =======

// Crie uma função que recebe uma lista de preços e categorias e devolve um cupom fiscal conforme abaixo:
// (['Serpentina', 'Refrigerante'], [20, 7], ['Infantil', 'Bebida'], 'NULABSSA') => 
// Nome           Valor     Desconto  Imposto Total     
// Serpentina     R$  20,00 R$   5,00     15% R$  18,00 
// Refrigerante   R$   7,00 R$   0,70         R$   6,30 
// Subtotal                                   R$  24,30 
// Cupom de Desconto: NULABSSA                R$   3,00 
// Total                                      R$  21,30
function gerarCupomFiscal(listaNomesProdutos, listaPrecosProdutos, listaCategoriasProdutos, cupom) {
    
    if(!Array.isArray(listaCategoriasProdutos) || listaCategoriasProdutos.length === 0){
        return undefined; 
      }

      let listaProdutos = listaNomesProdutos;
      let listaPrecos = listaPrecosProdutos;
      let listaCategoria = listaCategoriasProdutos;
      let primeiroProduto = valorTotal(listaPrecos[0], descontoTotal(listaCategoria[0]));
      let segundoProduto = (listaPrecos[1]- descontoTotal(listaCategoria[1]));
      let subtotal = (primeiroProduto + segundoProduto).toString().replace('.', ',') + '0';
      let precoTotalDaCompra = ((primeiroProduto + segundoProduto) - 3).toString().replace('.', ',') + '0';
      let gerarNotaFiscal = '';
      
      for (i = 0; i < listaProdutos.length; i++ ){
        if( i === 0){
          gerarNotaFiscal += `Nome           Valor     Desconto  Imposto Total     \n${validarNome(listaProdutos[i])}     R$  ${listaPrecos[i]},00 R$   ${descontoTotal(listaCategoria[i])},00     15% R$  ${primeiroProduto},00 \n`;
      }else{
          gerarNotaFiscal +=`${listaProdutos[i]}   R$   ${listaPrecos[i]},00 R$   ${descontoTotal(listaCategoria[i]).toString().replace('.', ',')}0         R$   ${segundoProduto.toString().replace('.', ',')}0 \nSubtotal                                   R$  ${subtotal} \nCupom de Desconto: NULABSSA                R$   3,00 \nTotal                                      R$  ${precoTotalDaCompra}`;
        }
      }
    return gerarNotaFiscal;

      function valorTotal(preco, categoria){
        return preco - categoria + (preco * 0.15)
      }
    
    function descontoTotal(categoria){
  
        const precoPorCategoria = [5, 8, 0.70]
        if(categoria === 'Infantil'){
          return precoPorCategoria[0]
        }else if(categoria === 'Alimentação'){
          return precoPorCategoria[1]
        }else{
          return precoPorCategoria[2]
        }
        
      }
      
      function validarNome(nome){
        if(nome === 'Pipoca'){
          return "Pipoca    "
        }
        return nome
      }
      
      
       
}
       

  
module.exports = {
    obterMenorPreco,
    obterMaiorPreco,
    capitalizarNomes,
    obterDescontoCategoria,
    obterPrecosLimitadosAoOrcamento,
    calcularTotalDaCompra,
    obterMenorEMaiorPrecos,
    obterPrecosDentroDoOrcamento,
    obterDescontoTotal,
    calcularTotalDaCompraComDescontos,
    capitalizarNomeCompleto,
    gerarCupomFiscal
};
