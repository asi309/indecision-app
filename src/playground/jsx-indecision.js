console.log("App.js is running");

const appObj = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    //console.log('Form Submitted');
    const option = e.target.elements.option.value;

    if (option){
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const reset = () => {
    appObj.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

let keyVal=-1;

// ReactDOM.render(template, appRoot);

const renderApp = () =>{
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subTitle && <p>{appObj.subTitle}</p>}
            <button disabled={appObj.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={reset}>Reset</button>
            {appObj.options.length>0?<p>Here are your options</p>:<p>No options</p>}
            {/*<p>{appObj.options.length}</p>*/}
            <ol>
                {appObj.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();