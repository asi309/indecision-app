class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
            }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("saving data");
        }
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }

    handleAddOptions(option){
        if(!option){
            return "Enter valid value to add item";
        }
        else if(this.state.options.indexOf(option)>-1){
            return "This option already exists";
        }
        // this.setState((prevState) => {
        //     return {
        //         //options: [...prevState.options, option]
        //         options: prevState.options.concat(option)
        //     };
        // });
        this.setState((prevState) => (
            {options: prevState.options.concat(option)}
        ));
    }

    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }

    handlePick(){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => (
            {options: prevState.options.filter((option) => optionToRemove !== option)}
        ));
    }

    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action handleDeleteOptions={this.handleDeleteOptions}
                    handlePick={this.handlePick}    
                    hasOptions={this.state.options.length>0} />
                <Options  
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption onFormSubmit={this.handleAddOptions} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {props.options.length===0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(option);

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))