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
        </tr>
        
            
            `
        }
        itemHolder.innerHTML = htmlFragment;
    }
}


renderItem();