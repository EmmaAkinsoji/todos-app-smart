import React from 'react'

export default class Menu extends 
React.Component {

render(){
const {handleToggle, toggle, 
handleAbout, togAbout,
handleMentor, togMentor,
handleContact, togContact} = this.props
return(
<div id = 'menu'>
<span
onClick = {handleToggle} > 
<i className =  {toggle ? '' : 'fa fa-bars' }></i>
<i className =  {toggle ? 'fas fa-times' : ''}></i>
</span>


<div
className = {toggle ? 'menu-container' : 
'hide'}>
{/* about */}
<div  className = 'about-container'
onClick = {handleAbout}>
<div><button className = {togAbout ? 'hide' : 'mn about-btn'}
>
     about</button></div>
<div className = {togAbout ? 'about' : 'hide'}>
<h3>todo app</h3>
<p><strong>version 1.0</strong> <br/>
copyright &copy; 2020 - 2023, reactjs <br/>
     all rights reserved.</p>
     </div>
</div>
{/* mentor */}
<div className = 'mentor-container'
onClick = {handleMentor}>
<div><button className = {togMentor ? 'hide' : 'mn mentor-btn'}
>mentor</button></div>
<div className = {togMentor ? 'mentor' : 'hide'}>
<h3>Mentor</h3>
<p>@deprof</p>
</div>
</div>
{/* contact */}
<div className = 'contact-container'
onClick = {handleContact}>
<div><button className = {togContact ? 'hide' : 'mn contact-btn'}>
     contact</button></div>
<div className = {togContact  ? 'contact' : 'hide' }>
<h3>Contact</h3>
<p><strong>whatsapp:</strong>09032830714 <br/>
<strong>hotline:</strong>09066851405 <br/>
<strong>email:</strong>xebba163@gmail.com </p>
</div>
</div>

</div>
</div>

)
}
}