import React from "react";

class AddComponent extends React.Component{
    state= {
        title : "",
        salary : "",
    }
    handleChangeShowJob = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleChangeSalary = (event1) => {
        this.setState({
            salary : event1.target.value
        })
    }
    handleSubmit = (event) => {
            event.preventDefault()
            if(!this.state.title || !this.state.salary){
                alert("Arrozzzzzz:Signupp!!")
                return;
            }
            console.log(">>Check data: ", this.state)
            this.props.addNewJob({
                id: Math.floor(Math.random()*10000),
                title: this.state.title,
                salary: this.state.salary
            })
            this.setState({
                title: "",
                salary: ""
            })
        }

    render(){
        return(
            <>
                <form >
                    <label htmlFor="fname">Job Name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.title}
                    onChange={(event) => this.handleChangeShowJob(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input type="text" 
                    value={this.state.salary}
                    onChange={(event1) => this.handleChangeSalary(event1)}
                    />
                    <br/>
                    <br/>
                    <input type="submit"
                    onClick ={(event) => this.handleSubmit(event)}
                    
                    />
                    
    
                </form> 
            </>
        )
    }
}
export default AddComponent