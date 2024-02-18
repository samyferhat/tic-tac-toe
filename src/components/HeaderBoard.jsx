
const HeaderBoard = ({ winner, status, onGoBack, onGoFront, currentMove, lastMove }) => {
    const disabledArrowLeft = currentMove === 0 && "disabled-arrow";
    const disabledArrowRight = (currentMove === 9 
        || winner || lastMove === 0 
        ||  currentMove === lastMove ) && "disabled-arrow";
    return (
        <div className="header-board">
            <div onClick={onGoBack} className="arrow-left" >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class={`bi bi-arrow-left ${disabledArrowLeft}`} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </div>

            <div className={`status ${winner && "winner"}`} ><h2>{status}</h2></div>
            <div onClick={onGoFront} className="arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class={"bi bi-arrow-right " + disabledArrowRight} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </div >

        </div>
    )
}

export default HeaderBoard;