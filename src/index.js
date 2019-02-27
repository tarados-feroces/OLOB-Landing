import './index.scss'

const BACKEND = 'http://localhost:5000/email';
const emailButton = document.getElementById('email_submit');

emailButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = document.getElementById('email_value').value;
    console.log(data);
    fetch(BACKEND, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({email: data})
    }).then((res) => {
        console.log(res);
        if (res.ok) {
            document.getElementById('email').style.display = 'none';
            document.getElementById('success').style.display = 'block';
            console.log('success');
        }

    }, (error) => {
        console.log('ERROR: ', error);
    })
});

const contents = document.getElementsByClassName('section__content');

window.addEventListener('scroll', () => {
    [...contents].forEach((item) => {
        if (isPartiallyVisible(item) && !item.classList.contains('visible')) {
            item.classList.remove('hidden');
            item.classList.add('animated-block');
        }
    });
});

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + 0.35 * height >= 0) && (0.35 * height + window.innerHeight >= bottom));
}

window.addEventListener('load', () => {
    [...contents].forEach((item) => {
        if (isPartiallyVisible(item) && !item.classList.contains('visible')) {
            item.classList.remove('hidden');
            item.classList.add('animated-block');
        }
    });
})
