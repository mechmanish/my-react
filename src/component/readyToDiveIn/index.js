import "./index.css";

function ReadyToDiveIn(){
    return(
        <div className="rdyToDv-container">
            <div className="black-container">
                <div className="rdyToDv">
                    <div className="rdyToDvDetail">
                        <p className="ques">Ready to dive in?</p>
                        <button>try for free</button>
                        <p className="offer">14-days free trail <span> | </span> No credit card needed <span> | </span> start in minutes</p>
                    </div>
                </div>
                <div className="rdyToDvPc">
                    <img src="https://idexinnovation.com/static/media/trial.2eaa8d0a.svg" alt="circle and square pic" />
                </div>
            </div>
        </div>
    );
}

export default ReadyToDiveIn;
