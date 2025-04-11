class App {
  readonly $container: HTMLElement;
  private title: string;
  private $debug: HTMLPreElement | null = null;

  constructor(containerId: string, title: string) {
    this.$container = document.querySelector(`#${containerId}`)!;
    this.title = title;
  }

  render() {
    this.$container.innerHTML = `
<h1>${this.title}</h1>

<div class="input-container">
  <label>Matrix 1</label>
  <textarea id="matrix-1" rows=5 columns=20>
[3, 1, 4]
  </textarea>
</div>
<div class="input-container">
  <label>Matrix 2</label>
  <textarea id="matrix-2" rows=5 columns=20>
[4, 3]
[2, 5]
[6, 8]
  </textarea>
</div>

<button id="multiply">Multiply</button>

<br />

<div class="result-container">
  <p>Result:</p>
  <pre id="result"></pre>
</div>

<p>
  <pre id="debug"></pre>
</p>

<style>
  #app {
    margin-left: auto;
    margin-right: auto;
  }

  .result-container,
  .input-container {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 1rem;
  }
</style>
    `;

    this.$debug = this.$container.querySelector("#debug");
  }

  debug(text: string) {
    if (this.$debug) {
      this.$debug.innerText = text;
    }
  }
}

export { App };
