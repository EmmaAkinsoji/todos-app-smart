import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import Menu from './menu'
import Time from './time'
import './fontawesome-free-5.15.4-web/css/all.min.css'
import './style.css'

export default class App extends React.Component{

//state
state = {
item : '',
items : [],
id : 0,
date : new Date().toLocaleTimeString(
[],
{hour : '2-digit',
minute: '2-digit',},
{hour12 : true}
),
editItem : false,
toggle : false,
togAbout : false,
togMentor : false,
togContact : false
}

//handlechange
handleChange = e =>{
this.setState({
item : e.target.value
})
}

//handlesubmit
handleSubmit = e =>{
e.preventDefault();

const newInput = {
item : this.state.item,
id : this.state.id
};

const updatedItems = [...this.state.items,
newInput]

this.setState({
item : '',
items : updatedItems,
id : this.state.id +111,
editItem : false
})
};

//handleclear
handleClear = () =>{
this.setState({
items : [],
})
}

//handledelete
handleDelete = id =>{
const filterItems = this.state.items.filter(item =>
item.id !== id)

this.setState({
items : filterItems
})

}

//handledit
handleEdit = id =>{
const filterItems = this.state.items.filter(item=>
item.id !== id)

const selectedItems = this.state.items.find(item =>
item.id === id )

this.setState({
items : filterItems,
item : selectedItems.item,
editItem : true,
id : id
})
}

//handleShow
handleToggle = () => {
this.setState({
toggle : !this.state.toggle
})
}

//handleabout
handleAbout = () => {
this.setState({
togAbout : !this.state.togAbout
})
}

//handlementor
handleMentor = () => {
this.setState({
togMentor : !this.state.togMentor
})
}

//handlecontact
handleContact = () =>{
this.setState({
togContact : !this.state.togContact
})
}

//date
componentDidMount(){
setInterval(
() => this.setState(
{
date : new Date().toLocaleTimeString([],
{hour : '2-digit',
  minute: '2-digit'},
  {hour12 : true}
    )}), 1000
);
}

render(){

return(
    
<div className = 'container'>

<div className = 'rec'></div>
<h5 className = 'title' >To-do App</h5>
<div className = 'todo-container'
>
<div className = {this.state.toggle ? 'hide' : 'input-container' }>
<TodoInput 
value = {this.state.item}
handleChange = {this.handleChange}
handleSubmit = {this.handleSubmit}
editItem = {this.state.editItem} />
</div>

<div className =  {this.state.toggle  ?  'hide' : 'list-container'} >
<TodoList
items = {this.state.items}
handleClear = {this.handleClear}
handleDelete = {this.handleDelete}
handleEdit = {this.handleEdit}
handleChecked = {this.handleChecked} />
</div>
</div>


<Menu handleToggle =  {this.handleToggle}
toggle = {this.state.toggle}
handleAbout = {this.handleAbout}
togAbout = {this.state.togAbout}
togMentor = {this.state.togMentor}
handleMentor = {this.handleMentor} 
togContact = {this.state.togContact} 
handleContact = {this.handleContact} />

<Time
date = {this.state.date}
/>
</div>
)
}
}