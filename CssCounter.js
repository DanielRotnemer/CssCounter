let counters = document.getElementsByClassName('counter');

let number_node = document.createElement('div');
number_node.classList.add('digit');

for (let i = 0; i < 10; i++) {
    number_node.innerHTML += '<div>' + i + '</div>';
}

[].forEach.call(counters, function (counter) {
    let value = parseInt(counter.getAttribute('value')) || 0;
    let digits = [];

    generateDigits(value.toString().length);
    setValue(value);
    
    setInterval(function() {
        setValue(Math.floor(Math.random() * 1000000));
    }, 3000);

    function setValue(number) {
        let s = number.toString().split('').reverse().join('');
        let l = s.length;

        if (l > digits.length) {
            generateDigits(l - digits.length);
        }

        for (let i = 0; i < digits.length; i++) {
            setDigit(i, s[i] || 0);
        }
    }

    function setDigit(index, number) {
        digits[index].style.marginTop = '-' + (number * 100) + 'px';
    }

    function generateDigits(amount) {
        for (let i = 0; i < amount; i++) {
            let d = number_node.cloneNode(true);
            counter.appendChild(d);
            digits.unshift(d);
        }
    }
});