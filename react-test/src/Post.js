import React from "react";
import Proptypes from "prop-types"

function Post({id, title}) { 
    return (
        <div className="Post">
        <div className="Post__title">{title}</div>
            <img className="Post__image" src={`https://api.source.unsplash.com/random?sig=${id}`}  alt="" />  
    </div>
)
}
Post.Prototype= {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired
} 
export default Post