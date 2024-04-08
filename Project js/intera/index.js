let nr = document.querySelector('input#txtn')
let list = document.querySelector('select#numb')
let res = document.querySelector('div#resultado')
let values =[]

function add(){
    if(inNumber(nr.value) && !list(list.value)){
        values.push(Number(n))
        let item = document.createElement('option')
        item.text = `valer ${nr.value} adicionado.`
        list.appendChild(item)
        res.innerHTML=" "
    }else{
        window.alert('valor inválidoo ou rncontrado na testa')
    }
nr.value = ''
nr.focus()
res
}

function inNumber(){
    
}