import React from "react";


const Result = props => {
    return (
        <ul>
          {props.isFecthingJoke ? (
            <div className="loadingSearch">
              <img src={props.loadingimg} />
            </div>
          ) : (
            props.renderJokes
          )}
        </ul>
    )
}


export default Result;