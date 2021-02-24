var body = document.getElementById("body")
var pLogin = document.getElementById("Login")

const api = axios.create( { baseURL: 'http://localhost:30001/'})

function ClearBody(){
    pLogin.remove();
}

function ClearDcenter(){
    var dCenterL = document.getElementById('divA')
    var dCenterL = document.getElementById('divA')
    if(dCenterL == null){
        console.log('O Objeto centro direito está vazio para ser limpado')       
     
    }else{
        dCenterL.remove()
    }
}

function LoaderPainel(nome){
    var btnAdd = document.createElement('button')
    btnAdd.classList.add('btnLeft')
    btnAdd.innerHTML = 'Adicionar'
    btnAdd.id = 'btnAdd'

    var btnEdit = document.createElement('button')
    btnEdit.classList.add('btnLeft')
    btnEdit.innerHTML = 'Editar'
    btnEdit.id = 'btnEdit'
    
    var liBtnAdd = document.createElement('li')
    liBtnAdd.appendChild(btnAdd)

    var liBtnEdit = document.createElement('li')
    liBtnEdit.appendChild(btnEdit)


    var ul = document.createElement('ul')
    ul.appendChild(liBtnEdit)
    ul.appendChild(liBtnAdd)
  
    var header = document.createElement('h6')
    header.innerHTML = 'Painel Produtos'
    
    var dTop = document.createElement('div')
    dTop.classList.add('col','s12','m12','l12')
    dTop.appendChild(header)
    

    var dLeft = document.createElement("div")
    dLeft.classList.add('col','s3','m3','l3')
    dLeft.innerHTML = 'Seja Bem vindo ' + nome
    dLeft.appendChild(ul)

    var dCenter = document.createElement('div')
    dCenter.classList.add('col','s9','m9','l9')
    dCenter.id = 'dCenter'


    var row = document.createElement('row')
    row.classList.add('row')
    row.appendChild(dTop)
    row.appendChild(dLeft)
    row.appendChild(dCenter)

    body.appendChild(row)

}

function LoaderProduct(){
    var dCenter = document.getElementById('dCenter')
    var dItensA = document.createElement('div')
    dItensA.id = 'divA'
    if(dCenter != null){
        dCenter.removeAttribute
    }
    
    api.get('/products')
    .then(function(response){
        var {length} = response.data
        img = []
        nameV = []
        idV = []
        for (let i = 0; i < length; i++) {
            
            
            var aIdName = document.createElement('a')
            aIdName.classList.add('col','s3','m3','l3')
            aIdName.id = 'aIdName'
            aIdName.innerHTML = response.data[i].id +'-'+ response.data[i].name
            aIdName.addEventListener('click',function(){detalhesItem(idV[i])})

            var p = document.createElement('a')
            p.classList.add('col','s3','m3','l3')
            p.innerHTML = response.data[i].descrition

            var aEx = document.createElement('i')
            aEx.classList.add('material-icons')
            aEx.innerHTML = 'image'
            

            var aImg = document.createElement('a')
            
            img.push(response.data[i].img)	
            aImg.classList.add('col','s3','m3','l3')
            aImg.id = 'aImg'
            aImg.appendChild(aEx)
            aImg.addEventListener("click", function(){OpenImg(img[i])})             
            
            var iEx = document.createElement('i')
            iEx.classList.add('material-icons')
            iEx.innerHTML = 'delete'

            var aEx = document.createElement('button')
            aEx.classList.add('col','s3','m3','l3')
            aEx.id = 'btnEx'
            aEx.appendChild(iEx)
            nameV.push(response.data[i].name)
            idV.push(response.data[i].id)
            aEx.addEventListener("click", function(){deleteIten(nameV[i],idV[i])})

            var divLinha = document.createElement('div')
            divLinha.id = 'divLinha'


            var divItens = document.createElement('div')
            divItens.classList.add('col', 's12', 'm12','l12','divItens')
            divItens.id = 'id:'+ response.data[i].id
            
            divItens.appendChild(aIdName)
            divItens.appendChild(p)
            divItens.appendChild(aImg)
            divItens.appendChild(aEx)
            
            dItensA.appendChild(divItens)
            dCenter.appendChild(dItensA)
            

        }	     
    })
    .catch(function(error){
        console.log(error)
    })
    

    
}

function LoaderProductAdd(){
    var dCenter = document.getElementById('dCenter')

    var pName = document.createElement('p')
    pName.innerHTML = 'Nome do produto'

    var pDesc = document.createElement('p')
    pDesc.innerHTML = 'Descrição do produto'
    
    var inputName = document.createElement('input')
    inputName.id = 'inputName'
    inputName.innerHTML  = 'Nome do produto'
    
    var inputDesci = document.createElement('input')
    inputDesci.id = 'inputDesci'
    inputDesci.innerHTML = 'Descrição do produto'   

    var btnImg = document.createElement('input')
    btnImg.type = 'file'
    btnImg.accept = 'image/jpeg'
    btnImg.classList.add('col','s12','m12','l12')
    btnImg.id = 'btnImg'
    btnImg.innerHTML = 'Upload Imagem'

    var btnUpload = document.createElement('button')
    btnUpload.classList.add('col','s12','m12','l12')
    btnUpload.id = 'btnUp'
    btnUpload.innerHTML = 'Salvar'
    btnUpload.addEventListener("click",function(){SaveProdNew()})


    var divCenter = document.createElement('div')
    divCenter.classList.add('col', 's12', 'm12','l12')
    divCenter.id = 'divA'
    divCenter.appendChild(pName)
    divCenter.appendChild(inputName)
    divCenter.appendChild(pDesc)
    divCenter.appendChild(inputDesci)
    divCenter.appendChild(btnImg)
    divCenter.appendChild(btnUpload)

    dCenter.appendChild(divCenter)   
}

function SaveProdNew(){
    if($('#inputName').val() != '' || $('#inputDesci').val() != ''){
        var nImg = ''
        console.log($('#btnImg').val())
        if($('#btnImg').val() == ''){
            nImg = 'ferro-099.jpg'
        }else{
            nImg = $('#btnImg').val().match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
        }
       api.post('/products',{
            'name':$('#inputName').val(),
            'descrition':$('#inputDesci').val(),
            'img': nImg           
        })      
        .then(function(response){
            console.log(response)
            ClearDcenter();
            LoaderProductAdd();
        })
        .catch(function(error){
            console.log(error)
        })
    }else{
        alert('Nome ou Descrição vazia')
    }
}

function OpenImg(img){
    console.log(img)
    var body = document.getElementById('body')

    const div = document.createElement('div')
    div.classList.add('popup')
    div.id = "popup"
    
    const popImg = document.createElement('img')
    popImg.classList.add('materialboxed')
    popImg.id = 'popup'

        if(img == null){
            popImg.src = '../_imagens/ferro-099.jpg'
        }else{
            popImg.src = '../_imagens/'+ img
        }    

    const btn = document.createElement('button')
    btn.innerHTML = 'Fechar'
    btn.addEventListener('click', function(){document.getElementById('popup').remove()})
    btn.id = 'btnImg'

    div.appendChild(popImg)
    div.appendChild(btn)
    
    body.append(div)
    
}

function deleteIten(name,id){
    if(window.confirm('Você deseja excluir o item '+ name)){
        api.delete('/products/'+id)
        .then(function(response){
            document.getElementById('id:'+id).remove()
            console.log('Produto deletado com sucesso: '+response)
        })
        .catch(function(error){
            console.log(error)
        })
    }else{
        console.log('Não excluido')
    }

}

function UploadProdut(id){
    nImg = ''
    if($('#btnImg').val() == ''){
        nImg = 'ferro-099.jpg'
    }else{
        nImg = $('#btnImg').val().match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
    }
    api.put('/products/'+id,{      
        'name': $('#idInput').val(),
        'descrition':$('#idDes').val(),
        'img': nImg  

    })
    .then(function(response){
        detalhesItem(id)
    })
    .catch(function(error){
        console.log(error)
    })
}

function detalhesItem(idV){
    var dCenter = document.getElementById('dCenter')
    ClearDcenter()

    id = idV
    
    api.get('/products/'+ idV)
    .then(function(response){
        var pName = document.createElement('p')
        pName.innerHTML = 'Nome do produto'
    
        var pDesc = document.createElement('p')
        pDesc.innerHTML = 'Descrição do produto'
        
        var pCat = document.createElement('p')
        pCat.innerHTML = 'Categoria'
        
        const nameInput = document.createElement('input')
        nameInput.id = 'idInput'
        nameInput.value = response.data.name
    
        const descriInput = document.createElement('input')
        descriInput.id = 'idDes'
        descriInput.value = response.data.descrition
        
        const selectBox = document.createElement('select')
        selectBox.id = 'selectBox'
        
        selectBox.op

        const btnImg = document.createElement('input')
        btnImg.type = 'file'
        btnImg.accept = '.jpeg'
        btnImg.classList.add('col','s12','m12','l12')
        btnImg.id = 'btnImg'
        btnImg.innerHTML = 'Upload Imagem'
        if(response.data.img != null){
            btnImg.value = response.data.img
        }
        
        var btnUpload = document.createElement('button')
        btnUpload.classList.add('col','s12','m12','l12')
        btnUpload.id = 'btnUp'
        btnUpload.innerHTML = 'Salvar'
        btnUpload.addEventListener("click",function(){UploadProdut(id)})

        const dInner = document.createElement('div')
        dInner.id = 'divA'
        dInner.appendChild(pName)
        dInner.appendChild(nameInput)
        dInner.appendChild(pDesc)
        dInner.appendChild(descriInput)
        dInner.appendChild(pCat)
        dInner.appendChild(selectBox)
        dInner.appendChild(btnImg)
        dInner.appendChild(btnUpload)
        dCenter.appendChild(dInner)     
    })
    .catch(function(error){
        console.log(error)
    })

}