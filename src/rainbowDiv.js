
export default function RainbowDiv() {

    return (
        <>
        <style>
            {`
            @keyframes gradientAnimation {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .rainbow-div {
                height: 100%;
                width: 100%;
                background: linear-gradient(90deg, #00ff00,  #a305f7, #00ff00, #a305f7);
                background-size: 300% 300%;
                animation: gradientAnimation 2s linear infinite;
            }
            `}
        </style>
        <div className="rainbow-div"></div>
        </>
    );
}
