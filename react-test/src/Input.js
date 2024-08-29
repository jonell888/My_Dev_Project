import React, {useState} from "react";
import PropTypes from  "prop-types";

function Input({ addPost}) {
    const [input,setInput]= useState("");   

    return (
        <div className="Input">
            <div className="Input__header">Creat Post</div>
            <input 
            className="Input__field" 
            type="text" value={input}
            placeholder=""
            />
        </div>
    )
}

Input.protoTypes = {
    addPost: PropTypes.func.isRequired
}
export default Input;