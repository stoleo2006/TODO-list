//kode for å lære litt DOM

const inputBox = document.getElementById("input-box");
const list = document.getElementById("List");
function AddTask() {
    if(inputBox.value=== ''){
        alert("Du må skrive noe!")
    }
}
else{
    let li = document.createElement("li");
    li.innerhtml = inputBox.value;
    list container.appendChild(li);
}
