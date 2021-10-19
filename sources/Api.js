const BASE_API = 'http://table4all.com.br/api';
//const BASE_API = 'http://192.168.0.113/api';

export default {

    checkToken: async (email, senha) =>{
        try{
            const req = await fetch ( `${BASE_API}/preload.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, senha: senha})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    signIn: async (email, senha) =>{
        try{
            const req = await fetch ( `${BASE_API}/login.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, senha: senha})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    signUp: async (tipo, nome, sobrenome, senha, email, cel) =>{
        try{
            const req = await fetch ( `${BASE_API}/cadastrar.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({tipo, nome, sobrenome, senha, email, cel})
            });

            const json = await req.json();

            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    userMesa: async (id) =>{ //SELECT user_mesa FROM table4al_table.usuarios WHERE user_id = '$id'
        try{
            const req = await fetch ( `${BASE_API}/mesa.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },  
    userHistorico: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/historico.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    estabHistorico: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/eHistorico.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    histDetail: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/historicodet.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    getMesas: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/getMesas.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    novaMesa: async (id, apelido) =>{
        try{
            const req = await fetch ( `${BASE_API}/novaMesa.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id, apelido: apelido})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    getTotal: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/getTotal.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    getProdutos: async (id) =>{  //****
        try{
            const req = await fetch ( `${BASE_API}/getProdutos.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    addProdutosMesa: async (idprod, idmesa, quantidade, tipo) =>{
        try{
            const req = await fetch ( `${BASE_API}/addProdutosMesa.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({idprod: idprod, mesa: idmesa, quant: quantidade, tipo: tipo})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    Payment: async (valor, idmesa) =>{
        try{
            const req = await fetch ( `${BASE_API}/pagamento.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({valor: valor, mesa: idmesa})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    VerPago: async (idmesa) =>{
        try{
            const req = await fetch ( `${BASE_API}/verPago.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({mesa: idmesa})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    Finalizar: async (idmesa, estab, valor, metodo, apelido) =>{
        try{
            const req = await fetch ( `${BASE_API}/finalizarMesa.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({mesa: idmesa, estab: estab, valor: valor, metodo: metodo, apelido: apelido})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    NovoProduto: async (descricao, preco, usuario, tipoPreco) =>{
        try{
            const req = await fetch ( `${BASE_API}/novoProduto.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({descricao: descricao, preco: preco, usuario: usuario, tipoPreco: tipoPreco})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
            console.error(error);
        }
    },
    EditarProduto: async (id, preco) =>{
        try{
            const req = await fetch ( `${BASE_API}/editarProduto.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({prod_id: id, novo_preco: preco})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    DeletarProduto: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/excluirProduto.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({prod_id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    GetPerfil: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/getPerfil.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    EditarPerfil: async (id, campo, novoValor, senha) =>{
        try{
            const req = await fetch ( `${BASE_API}/editarPerfil.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({user_id: id, campo: campo, valorCampo: novoValor, senha: senha})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    EditarSenha: async (id, campo, novoValor, senha) =>{
        try{
            const req = await fetch ( `${BASE_API}/editarSenha.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({user_id: id, campo: campo, valorCampo: novoValor, senha: senha})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    MesaUsuario: async (id, mesa) =>{
        try{
            const req = await fetch ( `${BASE_API}/mesaUsuario.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id, mesa: mesa})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    MesaAtiva: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/mesaAtiva.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    DeletarHist: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/deletarHist.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    dividirConta: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/dividirConta.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({idMesa: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    metodoPagamento: async (id) =>{
        try{
            const req = await fetch ( `${BASE_API}/metodoPagamento.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    detalhePorData: async (id, dia, mes, ano) =>{
        try{
            const req = await fetch ( `${BASE_API}/detalhePorData.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id, dia: dia, mes: mes, ano: ano})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    },
    forgotPassword: async (email) =>{
        try{
            const req = await fetch ( `${BASE_API}/forgotPassword.php`,{
                method: 'POST',
                headers:{ Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email})
            });

            const json = await req.json();
            return json;
        } 
        catch(error){
             console.error(error);
        }
    }
}