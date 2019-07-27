const baseURL = 'https://api.github.com';
const user = 'decentralvision';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  // return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'token f1bb40278e6b7effd562a66e58b00be4c8d705e2'
    }
  })
  .then(resp => resp.json())
  .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url}</a>`
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${baseURL}/repos/${repo}/issues`
  const postData = {
    title: document.getElementById('title').value
    body: document.getElementById('body').value
  }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization : `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues())
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${baseURL}/repos/${repo}/issues`
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
