var res = 0;
function clue(inputID, correct){
    var input = document.getElementById(inputID);
    input.value = correct;
}

function clearInput(inputID){
    var input = document.getElementById(inputID);
    input.value = "";
    document.getElementById(inputID).style.backgroundColor = 'white';
    document.getElementById(inputID).style.color = 'black';
}
function checkAnswers(inputID, capital){
    var input = document.getElementById(inputID).value;
    if (input == capital){
        document.getElementById(inputID).style.backgroundColor = 'green';
        document.getElementById(inputID).style.color = 'white';
        res++;
    } else {
        document.getElementById(inputID).style.backgroundColor = 'red';
        document.getElementById(inputID).style.color = 'white';
    }
}
function result(){
    alert(`Результат: ${res} вірних відповідей`);
}