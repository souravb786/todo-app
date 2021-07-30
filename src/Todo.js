import { ListItem, List, ListItemText, ImageIcon, ListItemAvatar, Avatar } from '@material-ui/core'
import React from 'react'
import './Todo.css';

function Todo(props) {
    // props is a property of a component it also help in differentiating the between components
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline"/>
            </ListItem>
            {/* <li>{props.text}</li>  */}
        </List>
    )
}

export default Todo
