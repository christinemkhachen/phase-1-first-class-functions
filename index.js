function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  let namedFunction = () => console.log("this is a named function");
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}
//extra example of passing as anonmyous function as an arguement
// let colorArray = ["red", "white", "pink", "purple"];
// colorArray.forEach(() => {
//   console.log(color.toUpperCase());
// });
//the function we passed foreach is an anonymous function bc it has no name
//in JS, functions are treated like first class citizens which means that a function can be passed as an arguement or returned from another function
