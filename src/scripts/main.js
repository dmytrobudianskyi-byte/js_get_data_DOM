'use strict';

const data = [...document.body.querySelectorAll('span')];

for (let i = 0; i < data.length; i++) {
    if (data[i].className !== 'population') {
        data.splice(i, 1);
        i--;
    } else {
        const normilized = data[i].innerText.replaceAll(',', '');
        const parsed = Number.parseFloat(normilized);

        if (Number.isNaN(parsed)) {
            data.splice(i, 1)
        } else {
            data[i] = parsed;
        }
    }
}

let totalSum = data.reduce((sum, elem) => sum += elem);
let avg = totalSum / data.length;

document.body.querySelector('.total-population').innerHTML = totalSum.toLocaleString('en-US');
document.body.querySelector('.average-population').innerHTML = avg.toLocaleString('en-US');
