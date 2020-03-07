const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {

    const updateCount = () => {

        const target = counter.getAttribute('data-target');
        const count = +counter.innerText;
        const incr = target / speed;

        if (count < target) {
            counter.innerText = count + Math.ceil(incr);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCount();

});
