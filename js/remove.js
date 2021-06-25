let localStorageItems = JSON.parse(localStorage.getItem("items"));
let itemName = document.getElementById("name");
let description = document.getElementById("description");
let category = document.getElementById("category");
let quantity = document.getElementById("quantity");
let deleteBtn = document.getElementById("deleteBtn");
let selectNames = document.getElementById("names");

if(localStorageItems){
    const itemHolder = selectNames;
    let names ="<option>Select the item name</option>";
    for (let i = 0; i < localStorageItems.length; i++){
        names += `
        <option value="${i}">${localStorageItems[i].itemName}</option>
        `
    }
    itemHolder.innerHTML = names;
}

selectNames.addEventListener("change", (e) =>{
    updateForm(selectNames.value);
})

const updateForm = (selectedItemIndex) =>{
    itemName.value = localStorageItems[selectedItemIndex] ? localStorageItems[selectedItemIndex].itemName : "";
    description.value = localStorageItems[selectedItemIndex] ? localStorageItems[selectedItemIndex].description : "";
    quantity.value = localStorageItems[selectedItemIndex] ? localStorageItems[selectedItemIndex].quantity : "";
    category.value = localStorageItems[selectedItemIndex] ? localStorageItems[selectedItemIndex].category : "";
}

const deleteItem = (itemIndex) => {
    let localStorageItems = JSON.parse(localStorage.getItem("items"));
    localStorageItems = localStorageItems.filter((item, index) =>{
        return itemIndex != index ;
    })
    localStorage.setItem("items", JSON.stringify(localStorageItems));
    
}

deleteBtn.addEventListener("click", () =>{
    deleteItem(selectNames.value);
    alert("Successfully deleted")
    window.location.href = "./index.html";
})