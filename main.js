
var totalBalance = prompt("New Buy\nEnter the starting amount")
// var totalBalance = 100
var remainBalance = totalBalance
var expenceBalance = 0
const myCurrentBalance = document.querySelector("#myCurrentBalance")
const remain = document.querySelector("#remain")
const expence = document.querySelector("#expence")
var buyButton = document.querySelector("#buyButton")
buyButton.style.display = 'none'
let itemArr = []
// console.log(totalBalance)
if(totalBalance == null || totalBalance == ""){
    location.reload()
}
else{
    myCurrentBalance.innerText = `Rs ${totalBalance}`
    remain.innerText = `Rs 0`
    expence.innerText = `Rs 0`


}

const forName = document.getElementById("name")
const forPrice = document.getElementById("price")

const history = document.getElementById("history")

function showItem(name , price){
    buyButton.style.display = 'block'
    var backData = history.innerHTML
    history.innerHTML  = backData + `<p class="alert alert-success">${name} : ${price}</p>`
    remain.innerHTML = remainBalance
    expence.innerHTML = expenceBalance
    var finalAns = 0
    itemArr.forEach((element)=>{
        finalAns = finalAns + element.price
    })
    buyButton.innerHTML = `Buy ${finalAns}`
}

var defaultData 

function addItem(){
    var nameData = forName.value
    var priceData = forPrice.value
    // console.log(nameData)
    // console.log(priceData)
    // console.log("Clicked")
    if(nameData == "" || priceData == ""){
        alert("Enter the Data first")
    }
    else{
        try {
            priceData = parseInt(priceData)
            defaultData = remainBalance
            remainBalance = defaultData - priceData
            expenceBalance = totalBalance - remainBalance

            if(remainBalance < 0){
                remainBalance = defaultData
                alert("Don't have enough money")
            }
            else{

                
                
                itemArr.push({
                    name : nameData,
                    price : priceData
                })
                // console.log(itemArr)
                showItem(nameData , priceData)
            
            
            }

        } catch (error) {
            alert("Enter Valid Price")
        }
    }
}

let extra = document.getElementById("extra")

function complete(){

    var ans = confirm("Complete the buy")
    if(ans == true){
        setTimeout(()=>{
            location.reload()
        } , 1000)
    }
    else{

    }
}
