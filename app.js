function fetchUserData() {
    const username = document.getElementById('username').value;
    if (username) {
      const url = `https://api.github.com/users/${username}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(user => {
          displayUserInfo(user);
        })
        .catch(error => {
          document.getElementById('user-info').innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
  }
  
  function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Followers:</strong> ${user.followers}</p>
      <p><strong>Following:</strong> ${user.following}</p>
      <p><strong>Public Repos:</strong> ${user.public_repos}</p>
      <p><strong>GitHub URL:</strong> <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
      <img src="${user.avatar_url}" alt="${user.name}'s avatar" width="100">
    `;
  }
  