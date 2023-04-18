var formSubmitOnlickListener = (event) => {
    let inputTags = document.querySelectorAll('input:invalid');

    for (let index = 0; index < inputTags.length; index++) {
        inputTags[index].classList.add("popup__text--field-invalid");
    }

    inputTags = document.querySelectorAll('input:valid');

    for (let index = 0; index < inputTags.length; index++) {
        inputTags[index].classList.remove("popup__text--field-invalid");
    }
}

var cancelPopup = (event) => {
    document.getElementsByClassName("popup")[0].parentElement.style.display = 'none';
}


document.querySelector("div.popup__header > img")
    .addEventListener("click", CancelPopup);
document.getElementById("cancel").addEventListener("click", cancelPopup);
document.getElementById("save").addEventListener("click", formSubmitOnlickListener);
document.getElementById("save-and-add").addEventListener("click", formSubmitOnlickListener);