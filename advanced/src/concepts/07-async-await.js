/**
 *
 * @param{HTMLDivElement} element
 */
export const asyncAwait2Component = async (element) => {
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  console.time("Start");
  element.innerHTML = `
  value1: ${value1}<br/>
  value2: ${value2}<br/>
  value3: ${value3}<br/>
  `;
  console.timeEnd("Start");
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 1000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, 500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, 100);
  });
