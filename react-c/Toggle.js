const toggle = document.querySelector(".toggle")

toggle.onclick = () => {
    if (toggle.classList.contains("toggle-on")){
        toggle.classList.remove("toggle-on")
        toggle.classList.add("toggle-off")
    } else {
        toggle.classList.remove("toggle-off")
        toggle.classList.add("toggle-on")
    }
}