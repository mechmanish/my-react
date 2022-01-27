import "./index.css";
function HowItWorks(){
    return(
        <div>
            <div className="hwItWrks">
                <h2>How it works</h2>
                <div className="steps">

                    <div className="stepA">
                        <div className="step-left">
                            <div className="step-written">
                                <div className="step-title">
                                    <img src="https://idexinnovation.com/static/media/check.5e0145ae.svg" alt="right mark"/>
                                    <p>Ideate & Collect</p>
                                </div>
                                <div className="step-detail">
                                    Harness the collective innovative power of your organization by allowing anyone to submit an idea, openly or anonymously. Find and prioritize the best ideas to implement, and turn them into tasks to realise them.
                                </div>
                            </div>
                            <div className="step-video">
                                <video src="https://idexinnovation.com/static/media/1st.7b3cc3db.mp4" autoPlay loop>
                                    ideate and collect
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="stepA">
                        <div className="step-right">
                            <div className="step-written">
                                <div className="step-title">
                                    <img src="https://idexinnovation.com/static/media/check.5e0145ae.svg" alt="right mark"/>
                                    <p>Plan & Organize</p>
                                </div>
                                <div className="step-detail">
                                    Create projects within your teams to manage your workflow. You can use projects for just about anything, from managing sprints, deadline-driven scheduling, ongoing processes, or storing backlog.
                                </div>
                            </div>
                            <div className="step-video">
                                <video src="https://idexinnovation.com/static/media/2nd.b321c293.mp4" autoPlay loop>
                                    plan and organize
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="stepA">
                        <div className="step-left">
                            <div className="step-written">
                                <div className="step-title">
                                    <img src="https://idexinnovation.com/static/media/check.5e0145ae.svg" alt="right mark"/>
                                    <p>Visualize & Implement</p>
                                </div>
                                <div className="step-detail">
                                    Switch between list, board, or calendar view to visualize your work. Use list view to prioritize tasks and assign them. Use board view to identify the stages of the tasks and focus on things at hand. Use calendar view to map out tasks over time and give the entire team a common vision to work towards.
                                </div>
                            </div>
                            <div className="step-video">
                                <video src="https://idexinnovation.com/static/media/3rd.a7e92386.mp4" autoPlay loop>
                                    visualize and implement
                                </video>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HowItWorks;