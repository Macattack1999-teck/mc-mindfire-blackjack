import React from 'react'

export default () => {
  return (
    <div style={{ height: "20%", backgroundColor: "#1D2020", display: "flex", justifyContent: "space-around", alignItems: "center", color: "#fff" }}>
      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Dealer
        </div>

        <div style={{ paddingTop: "5px" }}>
          Playing
        </div>
      </div>

      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Options
        </div>

        <div style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>
          <div style={{ width: "40px"}}>
            Hit
          </div>

          <div style={{ width: "40px"}}>
            Hold
          </div>
        </div>
      </div>

      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Player
        </div>

        <div style={{ paddingTop: "5px" }}>
          Waiting
        </div>
      </div>
    </div>
  )
}