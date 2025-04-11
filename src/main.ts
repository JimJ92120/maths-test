import { App } from "./App";

import { matrixByMatrix } from "./maths";

function formatMatrixInput(matrixString: string): number[][] {
  return matrixString
    .trim()
    .replace(/\[|\]| /g, "")
    .split("\n")
    .map((row) => row.split(",").map((value) => Number(value)));
}

window.addEventListener("load", () => {
  const app = new App("app", "Maths Test");
  app.render();

  //
  const $matrix1: HTMLTextAreaElement =
    app.$container.querySelector("#matrix-1")!;
  const $matrix2: HTMLTextAreaElement =
    app.$container.querySelector("#matrix-2")!;
  const $multiplyButton: HTMLButtonElement =
    app.$container.querySelector("#multiply")!;
  const $result: HTMLElement = app.$container.querySelector("#result")!;

  $multiplyButton.addEventListener("click", () => {
    let matrix1 = $matrix1.value;
    let matrix2 = $matrix2.value;

    if ("" === matrix1 || "" === matrix2) {
      console.error(`missing input for matrices`);

      return;
    }

    try {
      const result = matrixByMatrix(
        formatMatrixInput(matrix1),
        formatMatrixInput(matrix2)
      );

      $result.innerText = result.reduce((_result, row) => {
        return _result + `[${row.join(", ")}]\n`;
      }, "");
    } catch (error: any) {
      app.debug(error.message);
    }
  });

  app.debug("...");
});
