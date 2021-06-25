let itemName = document.getElementById("itemname");
let description = document.getElementById("description");
let category = document.getElementById("category");
let quantity = document.getElementById("quantity");
let addItem = document.getElementById("addItem");

let checksInput = () =>{
    if (itemName.value == "" && quantity.value == "" || description.value == "" || category.value == ""){
        
    }
}

addItem.addEventListener("click", ()=> {
   let checked =  checksInput();
if (!checked){
    item = {
        itemName: itemName.value,
        description: description.value,
        category: category.value,
        quantity: quantity.value
    }

        if (localStorage.getItem("items")){
            const localItem = JSON.parse(localStorage.getItem("items"));
            localItem.push(item);
            localStorage.setItem("items", JSON.stringify(localItem));
            alert("Item has been added Successfully");
        }
        else{
            let itemArray = [item];
            localStorage.setItem("items", JSON.stringify(itemArray));
            alert("Item has been added Successfully");
        }
   
}else{
    alert("Please enter a valid input");
}
        
});
