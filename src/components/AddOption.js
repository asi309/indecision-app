import React from 'react';

class AddOption extends React.Component{
    state = {
        error: undefined
    };
    
    onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(option);

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.option.value = '';
        }
    };

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

export default AddOption;