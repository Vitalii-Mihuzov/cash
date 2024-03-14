'use strict'


const btn = document.querySelector('.btn');

function regularSum(value) {
    // 3 * 50%
    const summaDay = document.getElementById('day').value * (('3' * '0.5') * document.getElementById('zp_hour').value)
    // 3 * 128%, 7 * 20%, 2 * 89%
    const summaNight = document.getElementById('night').value * (('3' * '1.28' + '7' * '0.2' + '2' * '0.89') * document.getElementById('zp_hour').value)
    // 3 * 100%
    const summaFridayDay = document.getElementById('day-hofesh').value * ('3' * '1' * document.getElementById('zp_hour').value)
    // 7 * 80%, 2 * 110%, 3 *140%
    const summaFridayNight = document.getElementById('night-hofesh').value * (('7' * '0.8' + '2' * '1.1' + '3' * '1.4') * document.getElementById('zp_hour').value)
    // 12 * 100%
    const summaSaturday = document.getElementById('saturday').value * ('12' * '1' * document.getElementById('zp_hour').value)

    const summaSverhUrochnih = summaDay + summaNight + summaFridayDay + summaFridayNight + summaSaturday
    const summaSverhUrochnihAndStavka = +document.getElementById('zp_month').value + summaSverhUrochnih 
    
    return summaSverhUrochnihAndStavka
}

function tigburimSum(value) {
    // 3 * 50%
    const summaDayDop = document.getElementById('dayDop').value * (('3' * '0.5' + '12' * '1' + '9' * '0.15') * document.getElementById('zp_hour').value)
    // 3 * 128%, 7 * 20%, 2 * 89%
    const summaNightDop = document.getElementById('nightDop').value * (('3' * '1.28' + '7' * '0.2' + '2' * '0.89' + '12' * '1') * document.getElementById('zp_hour').value)
    // 3 * 100%
    const summaFridayDayDop = document.getElementById('day-hofeshDop').value * (('3' * '1' + '12' * '1') * document.getElementById('zp_hour').value)
    // 7 * 80%, 2 * 110%, 3 *140%
    const summaFridayNightDop = document.getElementById('night-hofeshDop').value * (('7' * '0.8' + '2' * '1.1' + '3' * '1.4' + '12' * '1') * document.getElementById('zp_hour').value)
    // 12 * 100%
    const summaSaturdayDop = document.getElementById('saturdayDop').value * (('12' * '1' + '12' * '1') * document.getElementById('zp_hour').value)

    const summaTigburim = summaDayDop + summaNightDop + summaFridayDayDop + summaFridayNightDop + summaSaturdayDop
    
    return summaTigburim
}




btn.addEventListener('click', () => {
    document.getElementById('brutto').innerHTML = Math.round(regularSum() + tigburimSum());
})



