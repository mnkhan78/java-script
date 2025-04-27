const form = document.querySelector('form')
console.log(form);
const bmiOutput = document.getElementById('bmi-output')
bmiOutput.style.color = 'green'

form.addEventListener('submit', (e) => {
    console.log(e);
    console.log(e.target);
    e.preventDefault(); //this----------------

    const ht = parseInt(document.querySelector('#height').value)
    const wt = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (ht  === '' || ht < 0 || isNaN(ht)){
        result.innerHTML =`please give a valid height ${ht}`;
    } else if (wt === '' || wt < 0 || isNaN(wt)){
        result.innerHTML = `please enter the valid weight ${wt}`
    } else {
        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
        result.innerHTML = `your bmi is: ${bmi}`

        if (bmi < 18.6) {
            bmiOutput.innerHTML = 'you are under weight 😒';
            bmiOutput.style.color = 'red'
        } else if (bmi > 24.9) {
            bmiOutput.innerHTML = 'you are over-weight 😂'
            bmiOutput.style.color = 'purple'
        } else {
            bmiOutput.innerHTML = 'you are fit 😁👌'
        }
    }


})