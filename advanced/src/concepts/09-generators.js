/**
 *
 * @param{HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  // const myGenerator = myFirstGeneratorFunction();
  // console.log(myGenerator.next());
  const genId = idGeneratior();

  console.log(genId.next());

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGeneratior() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

function* myFirstGeneratorFunction() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";
  return "Ya no hay valores";
}
