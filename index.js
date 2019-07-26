const baseURL = 'https://api.github.com';
const user = 'decentralvision';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '7e8a54426c366e14499c7d4f0fe5e86c3c979359';
  // return ''
}

function forkRepo() {
  const repo = '/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => showResults(json))
}

function showResults(json) {
  console.log(json)
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
