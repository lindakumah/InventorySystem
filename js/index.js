let statusItem = (quantity) => {
    if (quantity == 0){
        return "outOfStock";
    }else if (quantity >= 1 && quantity <= 20){
        return "almostoutOfStock";
    }else{
        return "inStock";
    }
}

const countItems = () => {
    let totalProduct = document.getElementById("tnp");
    totalProduct.innerText = JSON.parse(localStorage.items).length;
}

countItems();

let renderItem = () => {
    let localStorageItems = JSON.parse(localStorage.getItem("items"));
    if(localStorageItems){
        const itemHolder = document.getElementById("items");
        let htmlFragment ="";
        for (let i = 0; i < localStorageItems.length; i++){
            htmlFragment += `

            <tr>
            <td>${i + 1}</td>
            <td>${localStorageItems[i].itemName}</td>
            <td>${localStorageItems[i].description}</td>
            <td>${localStorageItems[i].category}</td>
            <td>${localStorageItems[i].quantity}</td>
            <td><div class = "status  ${statusItem(localStorageItems[i].quantity)}" ></div></td>
        </tr>
        
            
            `
        }
        itemHolder.innerHTML = htmlFragment;
    }

    countItems();
}


renderItem();