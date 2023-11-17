import React from "react";

function InfoDisplay({ message, onClick }) {
    return <button onClick={onClick}>{message}</button>
}
export default InfoDisplay;