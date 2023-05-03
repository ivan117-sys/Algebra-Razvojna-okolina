var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

request.onload = function () {
  // Pristupi podacima koje je server vratio
  console.log(request);
};

request.send();
