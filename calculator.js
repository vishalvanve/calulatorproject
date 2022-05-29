function getInput(i){
    let x = i;

    if (x === '='){
        document.getElementById('screen').value = eval(document.getElementById('screen').value)
    }
    else if(x === 'Clr'){
        document.getElementById('screen').value = "";
    }
    else{
        document.getElementById('screen').value += i;
    }
}
