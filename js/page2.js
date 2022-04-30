
  /*  
    function limpa_formulario_cep() {
   
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('estado').value=("");
        
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
     
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    } 
    else {
       
        limpa_formulario_cep();
        alert("CEP não encontrado.");
        document.getElementById('cep').value=("");
    }
}
    
function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');

   
    if (cep !== "") {

      
        var validacep = /^[0-9]{8}$/;

     
        if(validacep.test(cep)) {

           
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";

           
            var script = document.createElement('script');

         
            script.src = '//viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
       
        limpa_formulario_cep();
    }
}

function formatar(mascara, documento){
var i = documento.value.length;
var saida = mascara.substring(0,1);
var texto = mascara.substring(i);

if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
}

}

function idade (){
var data=document.getElementById("dtnasc").value;
var dia=data.substr(0, 2);
var mes=data.substr(3, 2);
var ano=data.substr(6, 4);
var d = new Date();
var ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate();
    
    ano=+ano,
    mes=+mes,
    dia=+dia;
    
var idade=ano_atual-ano;

if (mes_atual < mes || mes_atual == mes_aniversario && dia_atual < dia) {
    idade--;
}
return idade;
} 


function exibe(i) {


    
document.getElementById(i).readOnly= true;
    
    


}

function desabilita(i){

 document.getElementById(i).disabled = true;    
}
function habilita(i)
{
    document.getElementById(i).disabled = false;
}


function showhide()
{
   var div = document.getElementById("newpost");
   
   if(idade()>=18){

div.style.display = "none";
}
else if(idade()<18) {
div.style.display = "inline";
}

}

*/
$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
      
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   
                   email: {
                     required: true,
                     email: true
                   },
                   password: {
                     required: true,
                     
                   }
                 },
                  messages: {
                   email: "Please enter a valid email address",
                  
                   password: {
                     required: "Please enter password",
                    
                   }
                   
                 },
                 submitHandler: function(form) {
                   form.submit();
                 }
               });
             });
             
    
    
    $(function() {
      
      $("form[name='registration']").validate({
        rules: {
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address"
        },
      
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
    

