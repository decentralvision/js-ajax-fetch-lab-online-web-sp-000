const baseURL = 'https://api.github.com';
const user = 'decentralvision';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'a8c3c2197cb992f2e8ae1d11ab8f7440e5120f56';
  // return ''
}

function forkRepo() {
  const repo = '/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${'a8c3c2197cb992f2e8ae1d11ab8f7440e5120f56'}`
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
