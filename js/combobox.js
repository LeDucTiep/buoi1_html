let clickCityEventHandler = (event) => {
    document.getElementsByClassName("input__text--field")[0].value = event.srcElement.outerText;

    let citys = document.getElementsByClassName("item");

    for (let index = 0; index < citys.length; index++) {
        citys[index].querySelector(".icon-container").style.visibility = "hidden";
    }

    event.srcElement.querySelector(".icon-container").style.visibility = 'visible';
};

let citys = document.getElementsByClassName("combobox__menu")[0]
    .getElementsByClassName("item");

for (let i = 0; i < citys.length; i++) {
    citys[i].addEventListener("click", clickCityEventHandler);
}