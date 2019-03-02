import './index.scss'

const BACKEND = 'http://130.193.34.42/email';
const emailButton = document.getElementById('email_submit');
const emailField = document.querySelector('.form__field');

const isEmailValid = (email) => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
};

emailField.addEventListener('focus', () => {
    emailField.style.color = '#5D5D5D';
});

emailButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = document.getElementById('email_value').value;
    if (!isEmailValid(data)) {
        emailField.style["boxShadow"] = '0 6px 10px 0 rgba(0, 0, 0 , .1)';
        emailField.style.color = 'red';
        console.log('error email')
    } else {
        fetch(BACKEND, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({email: data})
        }).then((res) => {
            if (res.ok) {
                document.getElementById('email').style.display = 'none';
                document.getElementById('success').style.display = 'block';
                console.log('Красавчик!');
            }

        }, (error) => {
            console.log('ERROR: ', error);
        })
    }

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
});
