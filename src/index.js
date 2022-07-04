/* @jsx createElement */
let count = 0;

function handleClick() {
  count = count + 1;
  render();
}

function render() {
  const element = (
    <div id='hello' className='greeting'>
      <p>Hello, world!</p>
      <p>
        <button type='button' onClick={handleClick}>
          Click me! ({count})
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
