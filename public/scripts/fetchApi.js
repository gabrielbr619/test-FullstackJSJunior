/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */

const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#password').value;

  if (email === '' || senha === '') {
    alert('Preencha os campos com informações válidas!');
    return;
  }

  const user = {
    name,
    email,
    senha,
  };

  fetch('http://localhost:3000/api/v1/users', {
    method: 'post',
    body: JSON.stringify(user),
    headers:
        { 'Content-type': 'application/json' },
  }).then((data) => {
    console.log(data);
    if (data.status === 400) {
      alert('Email já existente!');
    } else {
      window.location.href = 'http://localhost:3000/';
    }
  })
    .catch((error) => {
      console.log(error);
      console.log('deu erro');
    });
}

function handleDetail(id) {
  window.location.href = `http://localhost:3000/${id}`;
}

function handleRemove(id) {
  fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: 'delete',
  });
  window.location.href = 'http://localhost:3000/';
}

function handleUpdate(id) {
  const name = document.querySelector('#name-modal').value;
  const email = document.querySelector('#email-modal').value;
  const senha = document.querySelector('#password-modal').value;

  if (email === '' || senha === '') {
    alert('Preencha os campos com informações válidas!');
    return;
  }

  const user = {
    name,
    email,
    senha,
  };

  fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: 'put',
    body: JSON.stringify(user),
    headers:
        { 'Content-type': 'application/json' },
  }).then((data) => {
    console.log(data);
    if (data.status === 400) {
      alert('Email já existente!');
    } else {
      window.location.href = `http://localhost:3000/${id}`;
    }
  })
    .catch((error) => {
      console.log(error);
      console.log('deu erro');
    });
}

form.addEventListener('submit', (e) => handleSubmit(e));
