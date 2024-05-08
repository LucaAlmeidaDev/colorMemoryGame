



function darkMode(){
    const sunIcon = document.getElementById('sun')
    const moonIcon = document.getElementById('moon')

    if(darkMode) {
        moonIcon.style.display('block')
        sunIcon.style.display('none')
        document.documentElement.style.setProperty('--background','#171717');
        document.documentElement.style.setProperty('--gray','#000000');
        document.documentElement.style.setProperty('--text','#FFFFFF');
    }
    else{
        moonIcon.style.display('none')
        sunIcon.style.display('block')
        document.documentElement.style.setProperty('--background','#FFFFFF');
        document.documentElement.style.setProperty('--gray','#DDDDDD');     
        document.documentElement.style.setProperty('--text','#000000');
    }
}