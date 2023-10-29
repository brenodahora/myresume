console.log('Hello World!');

fetch('test.txt')
  .then(response => response.text())
  .then(text => {
    const array = text.split("\n");
    console.log(array);
  })

console.log('Test!');

fetch('js/test.txt')
  .then(response => response.text())
  .then(text => {
    const array = text.split("\n");
    console.log(array);
  })
