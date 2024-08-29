import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ addPost }) {
    const [input, setInput] = useState('');

    function onChange(e) {
        setInput(e.target.value)
    }
    function onKeydown(e) {
        const title = e.target.value;
        
        if (e.key === 'Enter' && title) {
            addPost(title)
            setInput('')
        }
    }
    return (
        <div className="Input">
            <div className="Input__header">Creat Post</div>
            <input
                className="Input__field"
                type="text" value={input}
                onChange={onChange}
                onKeydown={onKeydown}
            />
        </div>
    )
}
Input.protoTypes = {
    addPost: PropTypes.func.isRequired
}
export default Input;