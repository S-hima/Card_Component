import React from 'react'

function Card({name,img,tel,email}) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img
            className="circle-img"
            src={img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{tel}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card