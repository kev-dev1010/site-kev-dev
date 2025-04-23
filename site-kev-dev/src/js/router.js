//**!! 
// preciso separar as funcionalidades, como deixar as partes de roteamento separada da parte de alocar o conteudo no main#root

export const router = async ()=>{
    const routes = {
        '/': '/src/pages/home.html',
        '/sobre': '/src/pages/sobre.html',
        '/contato': '/src/pages/contato.html',
        
    };

    const path = window.location.pathname;//pega a rota atual como www.site.com/home ou /contato
    
    const route = routes[path] || '/src/pages/404.html';//retorna a pagina de erro caso nao tenha nenhum caminho das paginas definidas no objeto routes.
    
    const html = await fetch(route).then(res=> res.text());//solicita o caminho da pagina retornado para route
    
    document.getElementById('root').innerHTML = html;
    //coloca o conteudo ddo const html dentro do main#roo (nesse caso, as paginas relacionadas no seus caminhos)

};