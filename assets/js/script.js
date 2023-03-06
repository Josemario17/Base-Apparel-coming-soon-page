document.querySelector('button').onclick = function(){
    const nav = document.querySelector('input')
    nav.checked = true
    document.querySelector('nav button').onclick = function(){
        nav.checked = false
    }
}

