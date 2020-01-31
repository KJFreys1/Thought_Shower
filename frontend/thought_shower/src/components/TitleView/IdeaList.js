import React, { useState, useEffect } from "react"
// import "./TitleView.css"
import DeleteBtn from "../Delete/DeleteBtn"
import UpdateBtn from "../Update/UpdateBtn"
import TitleView from "./TitleView"

// const axios = require('axios').default
// const URL = 'https://thought-shower.herokuapp.com'

function IdeaList(props) {
  if (props.data) {
    console.log('idealist', props.data.data)
    const ideas = props.data.data.map(arr => {
      return (
        <div>
          <TitleView
            id={arr._id}
            updateIdea={props.updateIdea}
            deleteIdea={props.deleteIdea}
            user={props.user}
            data={arr}
          />
        </div>
      )
    })
    return <div>{ideas}</div>
  } else {
    return <></>
  }
}
export default IdeaList