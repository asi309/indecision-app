import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }

    handleAddOptions = (option) => {
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
    };

    handleDeleteOptions = () => {
        /* Removes all options */
        this.setState(() => ({options: []}))
    };

    handlePick = () => {
        /* Random option chooser */
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({selectedOption: option}));
    };

    handleDeleteOption = (optionToRemove) => {
        /* Removes a single option */
        this.setState((prevState) => (
            {options: prevState.options.filter((option) => optionToRemove !== option)}
        ));
    };

    handleModalClose = () => {
        this.setState(() => ({selectedOption: undefined}));
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

    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div className="body">
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                    <Action
                        handlePick={this.handlePick}    
                        hasOptions={this.state.options.length>0}
                    />
                    <div className="widget">
                        <Options  
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            onFormSubmit={this.handleAddOptions}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleModalClose={this.handleModalClose}
                />
            </div>
        );
    }
}

export default IndecisionApp;