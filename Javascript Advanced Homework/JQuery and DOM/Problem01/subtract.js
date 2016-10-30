/**
 * Created by TKlas on 23.10.2016 г..
 */
function subtract() {
    var firstNumber = parseFloat($('#firstNumber').val()),
        secondNumber = parseFloat($('#secondNumber').val()),
        result = $('#result'),
        sum = firstNumber - secondNumber;

    result.text(sum);
}