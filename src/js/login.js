function logar ()
{  
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');

    let listaUser = [];

    let userValid = {
        nome: '',
        sobrenome: '',
        celular: '',
        email: '',
        senha: '',
        medicamento:''

    }


    listaUser = JSON.parse(localStorage.getItem('listaUser'))


    listaUser.forEach((item) =>{

         if(usuario.value === item.emailCad && senha.value === item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                sobrenome: item.sobrenomeCad,
                email: item.emailCad,
                senha: item.senhaCad,
                medicamento: item.medCad
            }
        }

    })

      if (usuario.value == null && senha.value == null){
           alert ('Preencha todos os campos')
      }

     if(usuario.value === userValid.email && senha.value === userValid.senha){
          window.location.location = 'area-usuario.html'
          localStorage.setItem('userLogado', JSON.stringify(userValid)) 

    } else {
        alert ('Usuário ou senha incorretos')
    }
    
}

