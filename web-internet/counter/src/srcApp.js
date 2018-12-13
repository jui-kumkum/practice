let count = 0;

const add = () => {
    count++;
    render();
}

const minus = () => {
    count --;
    render();
}

const render = () => {
    const counterTemplete = (
        <div>
            <h1>{count}</h1>
            <button onClick = {add}>+Add</button>
            <button onClick={minus}>-Minus</button>
                <button>Reset</button>
        </div>
    )
    const myApp = document.querySelector("#myApp");
    ReactDOM.render(counterTemplete, myApp);
}
render();