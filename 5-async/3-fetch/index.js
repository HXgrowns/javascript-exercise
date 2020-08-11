function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url).then(resolve => {
    if (resolve.ok) {
      return resolve.json();
    }
    return Promise.reject(new Error(`${resolve.status} ${resolve.statusText}`));
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
