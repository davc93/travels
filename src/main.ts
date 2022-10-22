import './style.css'
function toggleDarkmode (){
    document.querySelector('html')?.classList.toggle('dark')
}

document.querySelectorAll('#moon-icon').forEach((node)=>{

    node.addEventListener('click',toggleDarkmode)
})