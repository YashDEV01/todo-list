import React, { Component } from 'react'
import Todoitems from "./Todoitems"
export default class Todolist extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit}= this.props; 
        return (
            <ul className ="list-group my-5">
              <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                    return(
                        <Todoitems
                        key={item.id}
                        title={item.title}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                        />
                    );
                })}
                <button 
                type = "button" 
                className="btn btn-danger btn-bock text-uppercase mt-5" 
                onClick={clearList}>Clear List</button>
                </ul>

        );
    }
}
