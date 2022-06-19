import React from 'react'

export default class Time extends
React.Component{

render(){
const {date} = this.props
return(
<div className = 'time'>
{date}
</div>
)
}
}