const getButtons = document.getElementsByClassName('button')
const getScreen = document.getElementsByClassName('screen')
const calcBig = document.getElementsByClassName('calc-big')
const calcSmall = document.getElementsByClassName('calc-small')
const rotate = document.getElementsByClassName('rotate')

// calcBig[0].hidden = true

rotate[0].addEventListener('click', (evt) => {
    if(calcBig[0].hidden) {
        calcSmall[0].hidden = true
        calcBig[0].hidden = false
    } else {
        calcSmall[0].hidden = false
        calcBig[0].hidden = true
    }
})

const allowed_keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '+',
    '*',
    '/',
    '=',
    'Enter',
]


for (let button of getButtons) {
    button.addEventListener('click', (evt) => {
        if(getScreen[0].textContent === '0') {
            getScreen[0].textContent = ''
        }
        insert(evt)
        if(evt.srcElement.innerHTML === "AC") cleanScreen(evt)
        if (evt.srcElement.innerHTML === '=') {
            getScreen[0].textContent = eval(getScreen[0].textContent)
        }
    })
}

function insert(evt) {
    if(evt.srcElement.innerHTML !== '=') {
        getScreen[0].textContent = getScreen[0].textContent + evt.srcElement.innerHTML
    }
}

function cleanScreen(evt) {
    getScreen[0].textContent = 0
}

function handlerPressKey() {
    document.addEventListener(("keydown"), (evt) => {
        if(getScreen[0].textContent === '0') getScreen[0].textContent = ''
        if(allowed_keys.includes(evt.key)){
            if(evt.key !== 'Enter') {
                getScreen[0].textContent = getScreen[0].textContent + evt.key
            }
            if (evt.key === 'Enter') {
                getScreen[0].textContent = eval(getScreen[0].textContent)
            }
        }
     })
}

handlerPressKey();

