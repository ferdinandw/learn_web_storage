const addItemInHTML = (value) => {
    if (value == null){
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    const content = document.createTextNode(value)
    const itemHTML = `${value} <button>Hapus</button>`
    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML 

}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value
    if (!itemInputValue){
        return;
    }

    addItemInHTML(itemInputValue);
    let itemArray = localStorage.getItem("item");

    if ( itemArray == null ) {
        itemArray = [itemInputValue]
    }else {
        itemArray = JSON.parse(itemArray);
        itemArray.push(itemInputValue)
    }

    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);

    itemInput[0].value = ""

}

const runNow = () => {
   const itemFromLS = localStorage.getItem("item")
   if (itemFromLS != null){
       const items = JSON.parse(itemFromLS);
       items.forEach ( item => {
        addItemInHTML(item);
       })
   }
    
}

runNow();