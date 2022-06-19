import React from "react";
 
class AddTodo extends React.Component {
    state={
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddToDo = () => {
        if(!this.state.title){
            alert("miss title");
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }
        this.props.addNewToDo(todo)
    }
    

    render(){
        let {title} = this.state;
        return(
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event)=> this.handleOnchangeTitle(event)}
                    />
                    <button type="button" className="add"
                    onClick = {() => this.handleAddToDo()}
                    >Add</button>
                </div>
        )
    }
}
export default AddTodo