import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './Card'
import Header from './Header'
import cardDatas from './CardDatas'

let htmlRef = document.querySelector('#root')

ReactDOM.render(
  <>
  <Header/>
  <div className="container">

  {cardDatas.map( (value) => {
    return(
      <Card
      key = {value.id}
      image = {value.image}
      subtitle = {value.subtitle}
      title = {value.title}
      seriesLink = {value.seriesLink}
      />
    )
  })}


 
  </div>
  
  </>,htmlRef
)