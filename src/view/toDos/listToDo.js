import React from "react";
import './listToDo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListToDo extends React.Component{
    state= {
        listToDos: [
            {id: 'todo1',title: "Doing HomeWork"},
            {id: 'todo2',title: "Making Video"},
            {id: 'todo3',title: "Listen to music"},
        ]   
    }

addNewToDo = (todo) => {
    this.setState({
        listToDos: [...this.state.listToDos, todo]
    })
    toast.error("Wow so easy!");

}
    render(){
        let {listToDos} = this.state;
        return(
            <div className="list-todo-container">
                <AddTodo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                    listToDos.map((item,index) => {
                        return(
                            <div className="todo-child" key={item.id}>
                                <span>{index + 1} - {item.title}</span>
                                <button className="edit"
                                onClick={() => this.handleEditTodo()}
                                > Edit</button>
                                <button className="delete"
                                onClick={() => this.handleDeleteTodo()}
                                > Delete</button>
                            </div>
                        )
                    }
                    )

                }      
                </div>
            </div> 
        )
    }
}
export default ListToDo