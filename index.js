const input = document.getElementById("button")

function addingEventListener() {
    alert('I am poked');
    return input.addEventListener("click", addingEventListener);

}

