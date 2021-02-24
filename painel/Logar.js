function logar(){
    axios.get('http://localhost:30001/users')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
}