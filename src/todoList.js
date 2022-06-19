import React from 'react'
import TodoItem from './todoItems'

export default class TodoList extends React.Component{

render(){

const {items, handleClear, handleDelete, handleEdit, handleChecked} = this.props

return(
<ul className = 'todo-list-grp'>
<div className = 'todo-list'>
{items.map(item=>{
return <TodoItem title = {item.item} 
key = {item.id}
handleDelete = {()=> handleDelete(item.id)} 
handleEdit = {()=> handleEdit(item.id)}
handleChecked = {() => handleChecked}
/>
})}
</div>

<button type = "button"
 className = " btn btn-clear" 
onClick = {handleClear} >
clear list</button>
</ul>

)
}
}