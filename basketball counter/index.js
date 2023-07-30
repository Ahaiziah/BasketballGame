let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let home = 0;
let guest = 0;

function addHomeOne(){
    home += 1;
    homeScore.textContent = home;
    
}

function addHomeTwo(){
    home += 2;
    homeScore.textContent = home;
}

function addHomeThree(){
    home += 3;
    homeScore.textContent = home;
}

function addGuestOne(){
    guest += 1;
    guestScore.textContent =guest;
}

function addGuestTwo(){
    guest += 2;
    guestScore.textContent =guest;
}

function addGuestThree(){
    guest += 3;
    guestScore.textContent =guest;
}