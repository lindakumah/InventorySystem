let itemName = document.getElementById("itemname");
let description = document.getElementById("description");
let category = document.getElementById("category");
let quantity = document.getElementById("quantity");
let addItem = document.getElementById("addItem");



addItem.addEventListener("click", ()=> {

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
            alert("Added Successfully");
        }
        else{
            let itemArray = [item];
            localStorage.setItem("items", JSON.stringify(itemArray));
            alert("Added Successfully");
        }
});
