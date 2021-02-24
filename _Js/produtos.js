//Array de categoria
let array_cat = ['Teste']
let array_lam = ['Ferro Chato 3/8 x 1/8', 'Ferro Chato 1/2 x 1/8','Ferro Chato 5/8 x 1/8','Ferro Chato 3/4 x 1/8', 'Ferro Chato 7/8 x 1/8', 'Ferro Chato 1 x 1/8','Ferro Chato 1.1/4 x 1/8','Ferro Chato 1.1/2 x 1/8','Ferro Chato 2 x 1/8']
//Contador imagens e id dos botoes
let k = 1


const api = axios.create( { baseURL: 'http://localhost:30001/'})


const corpo = document.querySelector('.produtos')
const menu = document.querySelector('#nav-mobile')
const menu_mobi = document.querySelector('#mobile-demo')
const header = document.querySelector('.cabecalho')


// Criando cards
function cards(cat){
    if(corpo != null){
        remove()
    }
    console.log(cat)
    if(cat != undefined){
        api.get('/products/cat/'+cat)
        .then(function(response){
            const { length } = response.data 
            
           // Teste de retorno
          //  console.log(response.data[0]) 
           
            for (let i = 0; i < length ; i++) {
            
                const p = document.createElement('p')
                p.classList.add('col','s12','m12','l12')
                p.id = 'pProd'
                p.innerHTML = response.data[i].name
                
                const div3 = document.createElement('div')
                div3.classList.add('card-content','s'+ 4,'m'+ 3,'l'+ 2,4)//'col','s12','m12','l12'
                div3.id = 'divpProd'
                div3.appendChild(p)
        
                const span = document.createElement('span')
                span.classList.add('card-title')
        
                const ia = document.createElement('i')
                ia.classList.add('material-icons')
                ia.innerHTML = 'navigate_next'
        
                const a = document.createElement('a')
                a.classList.add('btn-floating','halfway-fab','waves-effect','waves-light','blue');
                a.id = response.data[i].id
                a.appendChild(ia)
         
                const img = document.createElement('img');
                img.classList.add('responsive-img');
                img.id = 'imgProd'
                if( response.data[i].img === null ){
                    img.src = '_imagens/ferro-099.jpg'
                }else{
                    img.src = "_imagens/" + response.data[i].img
                }
                
               
        
                const div2 = document.createElement('div')
                div2.classList.add('card-image')
                div2.appendChild(img)
                div2.appendChild(span)
                div2.appendChild(a)
        
                const div1 = document.createElement('div')
                div1.classList.add('card')
                div1.appendChild(div2)
                div1.appendChild(div3)
        
                const center = document.createElement('center')
        
                const div = document.createElement('div')
                div.classList.add('col','s'+ 4,'m'+ 3,'l'+ 2,'mae')
                div.appendChild(center)
                div.appendChild(div1)     
    
                corpo.appendChild(div)
                
            }      
        })
        .catch(function(error){
            console.log(error)
        });
    }else{
    api.get('/products')
    .then(function(response){
        const { length } = response.data 
        
       // Teste de retorno
      //  console.log(response.data[0]) 
       
        for (let i = 0; i < length ; i++) {
        
            const p = document.createElement('p')
            p.classList.add('col','s12','m12','l12')
            p.id = 'pProd'
            p.innerHTML = response.data[i].name
            
            const div3 = document.createElement('div')
            div3.classList.add('card-content','s'+ 4,'m'+ 3,'l'+ 2,4)//'col','s12','m12','l12'
            div3.id = 'divpProd'
            div3.appendChild(p)
    
            const span = document.createElement('span')
            span.classList.add('card-title')
    
            const ia = document.createElement('i')
            ia.classList.add('material-icons')
            ia.innerHTML = 'navigate_next'
    
            const a = document.createElement('a')
            a.classList.add('btn-floating','halfway-fab','waves-effect','waves-light','blue');
            a.id = response.data[i].id
            a.appendChild(ia)
     
            const img = document.createElement('img');
            img.classList.add('responsive-img');
            img.id = 'imgProd'
            if( response.data[i].img === null ){
                img.src = '_imagens/ferro-099.jpg'
            }else{
                img.src = "_imagens/" + response.data[i].img
            }
            
           
    
            const div2 = document.createElement('div')
            div2.classList.add('card-image')
            div2.appendChild(img)
            div2.appendChild(span)
            div2.appendChild(a)
    
            const div1 = document.createElement('div')
            div1.classList.add('card')
            div1.appendChild(div2)
            div1.appendChild(div3)
    
            const center = document.createElement('center')
    
            const div = document.createElement('div')
            div.classList.add('col','s'+ 4,'m'+ 3,'l'+ 2,'mae')
            div.appendChild(center)
            div.appendChild(div1)     

            corpo.appendChild(div)
            
        }      
    })
    .catch(function(error){
        console.log(error)
    });
    }

 
}



// Carrinho
function carrinhoIcon(){
    const span = document.createElement('span')
    span.classList.add('badge')
    span.innerHTML = '0'

    const i = document.createElement('i')
    i.classList.add('material-icons','black-text')
    i.innerHTML = 'shopping_cart'
    
    const a = document.createElement('a')
    a.href = 'carrinho.html'
    a.appendChild(i)
    //a.appendChild(span)

    const li = document.createElement('li')
    li.appendChild(a)

    menu.append(li)

}

function carrinhoIconMob(){
    const span = document.createElement('span')
    span.classList.add('badge')
    span.innerHTML = '0'

    const i = document.createElement('i')
    i.classList.add('material-icons','black-text')
    i.innerHTML = 'shopping_cart'
    
    const a = document.createElement('a')
    a.appendChild(i)
    //a.appendChild(span)

    const li = document.createElement('li')
    li.appendChild(a)

    menu_mobi.append(li)
}

function list_lam(){
    remove()
    k = 1
    cards(array_lam,"_imagens/ferro-0",'prod',array_lam.length,2)
    
}

function remove(){
    $('.mae').remove()
}

console.log(name);