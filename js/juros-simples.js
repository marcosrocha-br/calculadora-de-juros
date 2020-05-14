            //Botões
var calc = document.getElementById('calcular')
calc.addEventListener('click',calcular)

var limp = document.getElementById('limpar')
limp.addEventListener('click', limpar)


     
            //Função calcular
function calcular(){
            //Campos
    var capital = document.getElementById('capital')
    var taxa = document.getElementById('taxa')
    var tempo = document.getElementById('tempo')

                //Conversão
    var c = Number(capital.value)
    var i = Number(taxa.value)
    var t = Number(tempo.value)

                //Fórmulas
    var j = c*i/100*t   //juros
    var m = c+j         //montante


    
    var juros = document.getElementById('j')
    var montante = document.getElementById('m')

    juros.innerHTML=`= ${j.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`
    montante.innerHTML=`= ${m.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`
    
}
            //Função limpar
function limpar(){
    document.getElementById('capital').value="";
    document.getElementById('taxa').value="";
    document.getElementById('tempo').value="1";
    var juros = document.getElementById('j')
    juros.innerHTML="= R$ 0,00"
    var montante = document.getElementById('m')
    montante.innerHTML="= R$ 0,00"
}
