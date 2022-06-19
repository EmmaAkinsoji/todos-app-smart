import React from 'react'

export default class TodoItems
extends React.Component{

render(){

const {title, handleDelete, handleEdit,} = this.props
return(
<li>
<input type = 'checkbox' id = 'check-btn' />
<label htmlFor = 'check-btn'
className = 'item'>
{title}
</label>

<div className = 'todoIcons' >

<span className = 'icon todo-edit'
onClick = {handleEdit}
style = {{color : '#0f0'}} >
<i className = 'fa fa-pen' ></i>
</span>

<span className = 'icon todo-delete'
onClick = {handleDelete}
style = {{color : '#f00' }} >
<i className = 'fa fa-trash' ></i>
</span>



</div>
</li>
)
}
}