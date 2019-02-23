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
        console.log('ERROR: ' ,error);
    })
});
