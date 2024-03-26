const palleteContainer = document.getElementById('palleteContainer');
const colorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const PALLETE_SIZE =5;

const createPallete = () => {
    for(let i =0; i< PALLETE_SIZE; i++){ //usamos un for para crear la cantidad de DIV a usar en HTML
        const palleteElement = document.createElement('div') //creamos el DIV
        palleteElement.classList.add('palleteItem'); 
        palleteContainer.appendChild(palleteElement);
    }
    updatePallete();
}

const colorize = (element) => {
    let color ='#';
    for(let i=0; i<6; i++){ //hacemos un ciclo for del 0 al 5
        const randonElement = colorValues[Math.floor(Math.random() * colorValues.length)]; //insertamos en la variable un valor de la lista de coloValues
        color += randonElement;// agregamos el valor a color
    };
    element.style.backgroundColor = color;
    element.innerHTML = `<span class= 'colorHex'>${color}</span>`;
}

const updatePallete = () =>{
    for(let i=0; i< palleteContainer.children.length; i++) { //reccorremos la camtidad de paletas de colores ya creados
        colorize(palleteContainer.children[i])
    }
};


createPallete();