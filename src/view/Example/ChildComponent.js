import React from 'react';
import "./Demo.css"
class ChildComponent extends React.Component {
    state = {
        showJob : false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnclickDelete = (job) => {
        console.log(">>>delete: ",job)
        this.props.deleteAJob(job)

    }
    render() {
        
        let {arrJob} = this.props ;
        let {showJob} = this.state;
        let check = showJob === true ? "showJob = true" : "showJob = false";
        console.log("call>>check: ",check)
        return (
        <>

            {showJob === false ?
            <div>
                <button onClick={() => this.handleShowHide()}>Show</button>
            </div>
            :
            <>
                <div className='job-name'>{

                    arrJob.map((item, index) => {
                        if(+item.salary >=50){
        
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary} $  <></>  <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                                </div>
                            )
                        }
                    })
            }
                </div>
            
                <div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </div>
            </>
            }
        </>
        )
    }
}



export default ChildComponent;