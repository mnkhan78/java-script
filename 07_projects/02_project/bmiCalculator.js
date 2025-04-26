const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', (e) => {
    console.log(e);
    console.log(e.target);
    e.preventDefault(); //this 

    const ht = parseInt(document.querySelector('#height').value)
    const wt = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (ht  === '' || ht < 0 || isNaN(ht)){
        result.innerHTML =`please give a valid height ${ht}`;
    } else if (wt === '' || wt < 0 || isNaN(wt)){
        result.innerHTML = `please enter the valid weight ${wt}`
    } else {
        const bmi = wt/(ht*ht).toFixed(2)
        result.innerHTML = `your bmi is: ${bmi}`

    }
    
    
    

    // document.querySelector('#height')
})