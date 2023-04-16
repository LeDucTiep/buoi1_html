let ClickCityEventHandler = (event) => {
    document.getElementsByClassName("dropdownlist__text--field")[0].value = event.srcElement.outerText;

    let citys = document.getElementsByClassName("item");

    for (let index = 0; index < citys.length; index++) {
        citys[index].getElementsByClassName("dropdownlist__menu--icon-checked")[0].style.visibility = "hidden";
    }

    event.srcElement.getElementsByClassName("dropdownlist__menu--icon-checked")[0].style.visibility = 'visible';
};

let citys = document.getElementsByClassName("dropdownlist__menu")[0]
    .getElementsByClassName("item");

for (let i = 0; i < citys.length; i++) {
    citys[i].addEventListener("click", ClickCityEventHandler);
}

