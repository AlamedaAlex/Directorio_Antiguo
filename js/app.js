//for bar nav
addEventListener('DOMContentLoaded', () =>{
    const menu_bar = document.querySelector('.menu_bar')
    if (menu_bar){
        menu_bar.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

//for search box
function showSel(){
    let sel=document.getElementById("sel1").value
    console.log(sel);

    switch (sel) {
        case "1":
            document.getElementById("busca").placeholder="Ingresa un CDA"
            break;
        case "2":
            document.getElementById("busca").placeholder="Ingresa una Sucursal"
            break;
        case "3":
            document.getElementById("busca").placeholder="Ingresa una Extension"
            break;
        case "4":
            document.getElementById("busca").placeholder="Ingresa un Telefono"
            break;
        default:
            document.getElementById("busca").placeholder="Busqueda"
            break;
    }

}

window.onload= () => {
    showSel();
}