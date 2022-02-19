function converterMoedas() {

    let real = document.getElementById('real').value
    let option
    let cotacoes = document.getElementById('cotacoes');
    let resultado

    if (real == '' || real == null) {
        document.getElementById('result').innerHTML = '-'
        real = document.getElementById('real').focus()
    } else {

        cotacoes = document.getElementById('cotacoes');
        option = parseFloat(cotacoes.options[cotacoes.selectedIndex].value);
        resultado = (real * option).toFixed(2);
        document.getElementById('result').innerHTML = resultado + " $ " + cotacoes.options[cotacoes.selectedIndex].text;
    }
}




function allowOnlyNumbers(evn) {
    var tecla = (window.event) ? event.keyCode : evn.which;

    // if (tecla > 47 && tecla < 58) return true;
    // else {
    //     if (tecla == 8 || tecla == 0) return true;
    //     else return false;
    // }

    tecla > 47 && tecla < 58 
        ? true 
        : tecla == 8 || tecla == 0 ?
        true : false;
};
