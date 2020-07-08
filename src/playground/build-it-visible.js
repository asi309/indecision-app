class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle(){
        this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility?'Hide Text':'Show Text'}</button>
                {this.state.visibility&&<p>This is the hidden text</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appObj = {
//     title: "Visibility Toggle app",
//     text: "This is hidden part of text"
// }

// let state = false;

// const toggleButton = () => {
//     // if(state === false){
//     //     state = true;
//     // }else{
//     //     state = false;
//     // }
//     state = !state;
//     renderApp();
// }

// const textDisplay = () => {
//     if(state === true){
//         return <p>{appObj.text}</p>
//     }
// }

// const appRoot = document.getElementById("app");

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{appObj.title}</h1>
//             <button onClick={toggleButton}>{state===false?"Show Hidden text":"Hide text"}</button>
//             {/*state===true?<p>{appObj.text}</p>:<p></p>*/}
//             {state && (<p>{appObj.text}</p>)}
//             {/*textDisplay()*/}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderApp();