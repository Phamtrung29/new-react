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
        ],
        editToDo: {}
    }

handleEditTodo = (todo) => {
    let {editToDo, listToDos} = this.state; 
    let isEmplyObj = Object.keys(editToDo).length === 0;
    if (isEmplyObj === false && editToDo.id === todo.id){
        let listToDosCopy = [...listToDos];

        let objIndex = listToDosCopy.findIndex((item => item.id === todo.id));

        listToDosCopy[objIndex].title = editToDo.title;

        this.setState({
            listToDos: listToDosCopy,
            editToDo: {}
        })
        toast.success("Save todo success")
        return;
    } else{
        this.setState({
            editToDo: todo
        })
    }
}

handleDeleteTodo = (todo) => {
    let currentToDos = this.state.listToDos;
        currentToDos = currentToDos.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentToDos
        })
        toast.success("Delete success");
}

handleonChangeEditTodo= (event)=>{
    let editToDoCopy = {...this.state.editToDo}
    editToDoCopy.title = event.target.value
    this.setState({
            editToDo: editToDoCopy
        })
        
}

addNewToDo = (todo) => {
    this.setState({
        listToDos: [...this.state.listToDos, todo]
    })
    toast.success("Wow so easy!");

}
    render(){
        let {listToDos, editToDo} = this.state;
        let isEmplyObj = Object.keys(editToDo).length === 0;

        console.log(">>check emty obj: ", isEmplyObj)
        return(
            <>
            <p>
            Simple ToDo App with React.js 
            </p>
            <div className="list-todo-container">
                <AddTodo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                    listToDos.map((item,index) => {
                        return(
                           

                            <div className="todo-child" key={item.id}>
                                {isEmplyObj === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editToDo.id === item.id ?
                                        
                                            <span>
                                                {index + 1} - {<input value={editToDo.title}
                                                onChange = {(event) => {this.handleonChangeEditTodo(event)}}
                                                />}
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                    </>
                                }
                                    <button className="edit"
                                    onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmplyObj === false && editToDo.id === item.id ?
                                        'save': 'Edit'
                            }
                                        </button>
                                
                                    <button className="delete"
                                    onClick={() => this.handleDeleteTodo(item)}
                                    > Delete</button>
                            </div>
                        )
                    }
                    )

                }      
                </div>
            </div> 
            </>
        )
    }
}
export default ListToDo