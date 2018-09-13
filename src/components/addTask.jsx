import React, { Component } from 'react';

export default class AddTask extends Component {
    state = { 
        todoList :  [],
        value :'',
        color : ['rgba(201, 76, 76, 0.3)', 'yellow', '#92a8d1'],
        
     };
    //  renderList(){
    //     if(this.state.todoList.length === 0 )
    //     return <p>No task available !</p>;
    //     return <ul>{this.state.todoList.map(todo => {
    //         if(todo.active ==1){
    //         <li  
    //         onDragStart={(e)=>this.onDragStart(e, todo.name)}                    
    //         draggable 
    //         key={todo.name}  className="draggable" style={{backgroundColor:todo.bgcolor}}><label>{todo.name}</label><button className="edit">Edit</button><button onClick={this.deleteTask(todo.name)} className="delete">Delete</button>
    //  </li> }})}</ul>;
    // }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    deleteTask = (delTask) =>{
     let delItem = this.state.todoList.filter((task)=>{
        if(task.name === delTask){
            task.active =0;
        }
     })
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        
        let todoList = this.state.todoList.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });
 
        this.setState({
            ...this.state,
            todoList    
        });
     }
    handleClicked= () => {
       console.log(this);
       let randomColor = this.state.color[Math.floor(Math.random() * this.state.color.length)];
       console.log(randomColor);
       let data = {
        name: this.state.value,
        bgcolor: randomColor,
        category : "wip",
        active : 1
        };
       this.state.todoList.push(data);
       this.setState({ todoList:  this.state.todoList });
       this.setState(
           {
               value :''
           }
       )
    }
    onEdit(value){

        console.log(value);

        
    }

    _handleDelete(id,action){
        let delItem = this.state.todoList.filter((task)=>{
            if(task.name === id){
                task.active =0;
            }
         })
         console.log(action);
         
         if(action === "delete"){
         this.setState({
            ...this.state,
            delItem    
        });
        }
        else{
            this.setState({value: id  });
        }
    }
    handleChange= (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value  });
        console.log(this.state.value);
        
     }
     
    render() { 

        var tasks = {
            wip: [],
            completed: []
        }

        this.state.todoList.forEach ((t) => {
            if(t.active > 0){
                tasks[t.category].push(
            
                    <li  
                onDragStart={(e)=>this.onDragStart(e, t.name)}                    
                draggable 
                key={t.name}  className="draggable" style={{backgroundColor:t.bgcolor}}><label>{t.name}</label><button className="edit" onClick={this._handleDelete.bind(this,t.name,'edit')}>Edit</button><button onClick={this._handleDelete.bind(this, t.name,'delete')} className="delete">Delete</button>
         </li> 
            );
        }});
    return (
    <div>
       
        <input type="text" name="taskdesc"  value={this.state.value} 
    onChange={(e)=>this.handleChange(e)}></input>
        <button onClick={this.handleClicked}> Add New</button>
       
        {this.state.todoList.length === 0 && 'Please create a task!'}
        {/* <div className="tasklist"> */}
     
        {/* </div> */}
        {this.state.todoList.length !== 0 && <label >Task Manager</label> }

        <div className="wip"
      
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                      {tasks.wip}
            </div>

       <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "completed")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.completed}
                </div>
    </div>);

    
    }
  
}
 
