var output = document.getElementById('output');
output.style.visibility ='hidden';

var input = document.getElementById('lbsinput');
input.addEventListener('input', getOutput);

function getOutput(e)
{
    output.style.visibility ='visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.002046;
    document.getElementById('kiloGramsOutput').innerHTML = lbs/2.2046;
    document.getElementById('OZOutput').innerHTML = lbs*16;
}
