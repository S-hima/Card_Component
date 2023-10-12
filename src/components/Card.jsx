import React from 'react'
import Profile from './Profile'
import Detail from './Detail'
import Header from './Header'

function Card({name, img,tel,email,}) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <Header newNAME={name}/>
          <Profile newImg={img} />
        </div>
        <div className="bottom">
          <Detail info={tel} />
          <Detail info={email} />
          <Detail info="2001-11-11" />
        </div>
      </div>
    </div>
  )
}

export default Card