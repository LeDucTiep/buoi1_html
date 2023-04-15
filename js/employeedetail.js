var EditButtonOnlickListener = () => {
    document.getElementsByClassName("popup")[0].parentElement.style.display = 'block';
}

let editButtons = document.querySelectorAll(".table button.link-button");

for (let index = 0; index < editButtons.length; index++) {
    editButtons[index].addEventListener("click", EditButtonOnlickListener)
}
