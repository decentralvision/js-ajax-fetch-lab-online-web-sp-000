const baseURL = 'https://api.github.com';
const user = 'decentralvision';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '07a73a5b0ef94992d49b60c3cd42290f61ceae50';
  // return ''
}

function forkRepo() {
  const repo = '/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: 'POST',
    headers: {
      Authorization: 'token f1bb40278e6b7effd562a66e58b00be4c8d705e2'
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
