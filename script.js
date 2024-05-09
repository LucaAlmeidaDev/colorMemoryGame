var darkModeButton = document.getElementById('darkModeButton')

var sun = document.getElementById('sun')
var moon = document.getElementById('moon')

darkModeButton.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        sun.style.display = 'none';
        moon.style.display = 'block';
    }else{
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
}

var menu = document.getElementById('menu')
var dropDown = document.getElementById('dropDown')
var dropDownBtn = document.getElementById('dropDown-btn')
var logo = document.getElementById('logo')
 

menu.onclick = function(){
    menu.style.display = 'none';
    dropDown.style.display = 'block';
}
dropDownBtn.onclick = function(){
    menu.style.display = 'block';
    dropDown.style.display = 'none';
}   