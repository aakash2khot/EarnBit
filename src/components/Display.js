import React from 'react'
import PropTypes from 'prop-types'

export default function Display(props) 
{
  return (
    <div className="col">
    {/* <div className="card"> */}
    
    <div className="card" style={{width: '18rem'}}>
      {/* <div className="card" style="width:18rem;"> */}
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://getbootstrap.com/docs/5.3/components/card/" className="btn btn-primary">Participate</a>
      </div>
    </div>
    </div>
  )
}
// How to handle events
// How to set state

Display.propTypes = {
    title : PropTypes.string,
    image : PropTypes.string
    // title : PropTypes.string.isRequired
}

Display.defaultProps = {
    title : "Contest",
    image : "https://cdn.zeebiz.com/sites/default/files/2022/09/13/200028-untitled-design-2022-09-13t125137903.jpg"
}