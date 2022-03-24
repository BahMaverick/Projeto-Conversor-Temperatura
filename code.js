function Converter() {
    var valorTemperatura = document.getElementById("valor");
    var valor = valorTemperatura.value;
    var valorEmCelsius = parseFloat(valor);
    var valorEmFarheint = valorEmCelsius * 1.8 + 32;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = `O resultado da temperatura de ${valorEmCelsius}ºC é ${valorEmFarheint}ºF.`;
    elementoValorConvertido.innerHTML = valorConvertido;
}