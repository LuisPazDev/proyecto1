const menuBtn = document.querySelector('#menuBtn');
const catagBtn = document.querySelector('#catalogoBtn');
const nosBtn = document.querySelector('#nosBtn');
const logInBtn = document.querySelector('#logInBtn');
const displayMenu = document.querySelector('.nav-menu-enlaces');
const displayCatag = document.querySelector('.nav-catalogo-enlaces');
const displayNos = document.querySelector('.nav-nosotros-enlaces');
const logInMenu = document.querySelector('.nav-enlace-logIn');

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu (){
    const isCatagClosed = displayCatag.classList.contains('inactive');
    const isDisplayNosClosed = displayNos.classList.contains('inactive');
    const isLogInClosed = logInMenu.classList.contains('inactive');
    if (!isCatagClosed){
        displayCatag.classList.add('inactive');
    }
    else if (!isDisplayNosClosed){
        displayNos.classList.add('inactive')
    }
    else if (!isLogInClosed){
        logInMenu.classList.add('inactive');
    }
    displayMenu.classList.toggle('inactive')
};

catagBtn.addEventListener('click', toggleCatag);
function toggleCatag (){
    const isDisplayMenuClosed = displayMenu.classList.contains('inactive');
    const isDisplayNosClosed = displayNos.classList.contains('inactive');
    const isLogInClosed = logInMenu.classList.contains('inactive');
    if (!isDisplayMenuClosed){
        displayMenu.classList.add('inactive')
    }
    else if (!isDisplayNosClosed){
        displayNos.classList.add('inactive')
    }
    else if (!isLogInClosed){
        logInMenu.classList.add('inactive');
    }
        displayCatag.classList.toggle('inactive') 
};

nosBtn.addEventListener('click', toggleNos);
function toggleNos (){
    const isDisplayMenuClosed = displayMenu.classList.contains('inactive');
    const isCatagClosed = displayCatag.classList.contains('inactive');
    const isLogInClosed = logInMenu.classList.contains('inactive');
    if(!isDisplayMenuClosed){
        displayMenu.classList.add('inactive');
    }
    else if(!isCatagClosed){
        displayCatag.classList.add('inactive'); 
    }
    else if (!isLogInClosed){
        logInMenu.classList.add('inactive');
    }
    displayNos.classList.toggle('inactive');
};

logInBtn.addEventListener('click', toggleLogIn);
function toggleLogIn (){
    const isDisplayMenuClosed = displayMenu.classList.contains('inactive');
    const isCatagClosed = displayCatag.classList.contains('inactive');
    const isDisplayNosClosed = displayNos.classList.contains('inactive');
    if(!isDisplayMenuClosed){
        displayMenu.classList.add('inactive');
    }
    else if(!isCatagClosed){
        displayCatag.classList.add('inactive'); 
    }
    else if (!isDisplayNosClosed){
        displayNos.classList.add('inactive')
    }

    logInMenu.classList.toggle('inactive');
};


