        //JUROS SIMPLES
function calcsimples(){    
        //Campos
        var c = Number(document.getElementById('capital').value);
        var i = Number(document.getElementById('taxa').value);
        var t = Number(document.getElementById('tempo').value);

        //Fórmula        
        var j = c*i/100*t   //juros
        var m = c+j         //montante

        document.getElementsByClassName('juros')[0].innerHTML = `= ${j.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;
        document.getElementsByClassName('montante')[0].innerHTML = `= ${m.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;
}    
        //JUROS COMPOSTOS
function calccomposto(){
        //Campos
        var c = Number(document.getElementById('capital').value);
        var i = Number(document.getElementById('taxa').value);
        var t = Number(document.getElementById('tempo').value);

        //Fórmulas
        var m = c*(1+i/100)**t //montante
        var j = m-c            //juros

        var juros = document.getElementsByClassName('juros')[0].innerHTML = `= ${j.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;
        var montante = document.getElementsByClassName('montante')[0].innerHTML = `= ${m.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;

        
}
        //FUNÇÃO TECLA ENTER
function entersimples(tecla){
        if(tecla.keyCode == 13){
                calcsimples();
        }
}
        //FUNÇÃO TECLA ENTER
function entercomposto(tecla){
        if(tecla.keyCode == 13){
                calccomposto();
        }
}
            //Função limpar
function limpar(){
        document.getElementById('capital').value="";
        document.getElementById('taxa').value="";
        document.getElementById('tempo').value="1";
        document.getElementsByClassName('juros')[0].innerHTML="= R$ 0,00";
        document.getElementsByClassName('montante')[0].innerHTML="= R$ 0,00";
}