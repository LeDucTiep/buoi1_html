let ClickCityEventHandler = (event) => {
    document.getElementsByClassName("combobox__input")[0].value = event.srcElement.outerText;
};

let citys = document.getElementsByClassName("combobox__menu")[0]
    .getElementsByClassName("city");

for (let i = 0; i < citys.length; i++) {
    citys[i].addEventListener("click", ClickCityEventHandler);
}

