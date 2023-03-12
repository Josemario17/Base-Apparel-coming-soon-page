
const inputElement = document.querySelector("input")
const btnClickSubmit = document.querySelector("button[type=submit]")
const elementTextError = document.querySelector(".hidden")
const elementImgError = document.querySelector("form img")

btnClickSubmit.onclick = (e) =>{
    e.preventDefault()
    if(inputElement.value.indexOf("@") == -1) return Error()
    return Success()
}

 Error = () => {
    elementTextError.style.display = "inline"
    inputElement.id = "error"
    elementImgError.style.display = "flex"
    inputElement.onchange = () => { inputElement.id = "none"; elementTextError.style.display="none"; elementImgError.style.display="none" }
}

Success = () => {
    alert("well done.")
    inputElement.value = ""
}