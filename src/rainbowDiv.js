import React from "react";

export default function RainbowDiv() {
    const style = {
        height: "100%",
        width: "100%",
        background: 'linear-gradient(45deg, green, pink)', 
    }

    return (
        <div style={style}>
        </div>
    );
}
