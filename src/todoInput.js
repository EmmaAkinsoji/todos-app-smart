import React from 'react'

export default class TodoInput
extends React.Component{

render(){

const {value,
handleSubmit, handleChange, editItem} = this.props;

return(
<form  onSubmit = {handleSubmit} >

<input type = 'text'
placeholder = 'input todos'
value = {value}
onChange = {handleChange}
style = {{borderColor : editItem ?
'#0f0' : '#ddd'}}
 />

<button type = 'button'
className = "btn btn-add"
onClick = {handleSubmit}
style = {{backgroundColor
 : editItem ? '#0f0' : '#ddd'}} >
{editItem ? "Edit Item" : "Add Item" }
</button>
</form>
)
}
}