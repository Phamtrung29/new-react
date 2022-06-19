import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {
        arrJob: [
            {id: "job1", title: "Developers", salary: "50"},
            {id: "job2", title: "Testers", salary: "40"},
            {id: "job3", title: "Managers", salary: "100"}
 
         ]
    }
    addNewJob = (job) => {
        console.log("check job:" , job)
        let currenJobs = this.state.arrJob
        currenJobs.push(job)
        this.setState({
            // arrJob:  [...this.state.arrJob, job]
            arrJob: currenJobs
        })
    }
    deleteAJob = (job) =>{
        let currenJobs = this.state.arrJob;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currenJobs
        })
    }
   
    render() {
        
        console.log("call render", this.state)
        return (
            <>
                <AddComponent
                addNewJob = {this.addNewJob}
                />
                
                <ChildComponent
                arrJob = {this.state.arrJob}
                deleteAJob= {this.deleteAJob}
                />
                
            </> 
        )
    }
}

export default MyComponent;