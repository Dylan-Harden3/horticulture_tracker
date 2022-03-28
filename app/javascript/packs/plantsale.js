// Script for separating the plantsale GUI into 2 pages

let pages = [document.getElementById('annuals-link'), document.getElementById('perennials-link')];
console.log(pages)
pages.forEach(p => { p.onclick = setPlantSaleEvent });

window.onload = () => {

    if(!localStorage.getItem('plantsale-page')) {
        localStorage.setItem('plantsale-page','annuals-link');
    }

    setPlantSalePage();
}

function setPlantSalePage() {
    
    if(localStorage.getItem('plantsale-page') == 'annuals-link') {
        document.getElementById('perennials-wrapper').style.display = 'none';
        document.getElementById('annuals-wrapper').style.display = 'block';
    }else if (localStorage.getItem('plantsale-page') == 'perennials-link') {
        document.getElementById('perennials-wrapper').style.display = 'block';
        document.getElementById('annuals-wrapper').style.display = 'none';
    }

}

function setPlantSaleEvent(e) {

    e.preventDefault();

    console.log(this.id);

    if(this.id == localStorage.getItem('plantsale-page')) {
        console.log('equal') 
        return }

    if(localStorage.getItem('plantsale-page') == 'annuals-link') {
        localStorage.setItem('plantsale-page','perennials-link');
        document.getElementById('perennials-wrapper').style.display = 'block';
        document.getElementById('annuals-wrapper').style.display = 'none';
    }else if (localStorage.getItem('plantsale-page') == 'perennials') {
        localStorage.setItem('plantsale-page','annuals-link');
        document.getElementById('perennials-wrapper').style.display = 'none';
        document.getElementById('annuals-wrapper').style.display = 'block';
    }

}
