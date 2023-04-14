let ClickCityEventHandler = (event) => {
    document.getElementsByClassName("input__text--field")[0].value = event.srcElement.outerText;

    let citys = document.getElementsByClassName("city");

    for (let index = 0; index < citys.length; index++) {
        citys[index].getElementsByClassName("combobox__menu--icon-checked")[0].style.visibility = "hidden";
    }

    event.srcElement.getElementsByClassName("combobox__menu--icon-checked")[0].style.visibility = 'visible';
};

let citys = document.getElementsByClassName("combobox__menu")[0]
    .getElementsByClassName("city");

for (let i = 0; i < citys.length; i++) {
    citys[i].addEventListener("click", ClickCityEventHandler);
}

