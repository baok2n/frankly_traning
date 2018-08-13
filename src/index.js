import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker';

import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});

let model = { clicks: 0};

function render() {
  ReactDOM.render(<AuthorQuiz clicks={model.clicks} onClick={() => { model.clicks += 1; render(); }}/>, document.getElementById('react'));
  
}
render();
registerServiceWorker();
