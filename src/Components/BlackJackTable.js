import React, { useState } from 'react'

export default () => {
  const [ cards, setCards ] = useState()

  return (
    <div style={{ backgroundColor: "#744A35", height: "80%" }}>
      <div style={{ backgroundColor: "#008000", height: "90%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}>
        <div>Dealer half</div>
        <div>Player half</div>
      </div>
    </div>
  )
}