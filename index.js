const baseURL = 'https://api.github.com';
const user = 'decentralvision';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '62e672ebf155e2c6cd4fb0ca610566bf766e15a0';
  // return ''
}

function forkRepo() {
  const repo = '/learn-co-curriculum/js-ajax-fetch-lab' + '/forks';
  fetch(baseURL + repo, {
    method: 'POST'
    headers: {
      Authorization: `token ${getToken}`
    }
  })
  .then(resp => resp.json())
  .then(json => showResults(json))
}

function showResults(json) {
  json
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
