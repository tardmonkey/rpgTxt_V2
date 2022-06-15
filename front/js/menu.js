
let bienvenueSpan = document.getElementById("bienvenueSpan")
let cEmail = document.getElementById('cEmail')

cEmail.addEventListener("input", () => {bienvenueSpan.innerHTML = cEmail.value})


function createCard(){
    
}


 /** 
     * Récupérer données d'une url
     * @param {string} url
     * @return {promise}
  */
export function fetchData(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
          .then(function(response){
              return response.json()
          })
          .then(function(data){
            return resolve(data)
        })
          
    })
  }

let data = fetchData("http://localhost:3000/user")
console.log(data)


