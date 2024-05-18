// get tab-content and tablink

let tablink = document.getElementsByClassName("tab-links");
let tabContent = document.getElementsByClassName("tab-content");

// call opnetab function

function openTab(tabname) {
    for (item of tablink) {
        item.classList.remove('active-link')
    }
    for (item of tabContent) {
        item.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab')
}