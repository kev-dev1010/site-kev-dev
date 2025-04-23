export const loadComponent = async (selector, path)=>{
    try{
        const html = await fetch(path).then(res => res.text());
        document.querySelector(selector).innerHTML = html;
    }catch(err){
        console.error(`Erro ao carregar componente ${path}`, err);        
    }
};