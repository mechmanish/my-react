import "./index.css";

function TrstdBy(){
    return(
        <div>
            <div className="trusted-container">
                <div className="trusted-heading">
                    <h2>Trusted by</h2>
                </div>
                <div className="trusted-brands">
                    <div>
                        <img src="https://idexinnovation.com/static/media/pleased.c136ec9a.png" alt="pleased logo" />
                    </div>
                    <div>
                        <img src="https://idexinnovation.com/static/media/unlokk.72971c34.png" alt="unlokk logo" />
                    </div>
                    <div>
                        <img src="https://idexinnovation.com/static/media/freshlink.b4d5a43d.png" alt="freshlink logo" />
                    </div>
                </div>

                <div className="feedbacks">
                    <div className="feedback">
                        <p>We use IDEX to capture innovative ideas from our employees, turn those ideas into actionable items, and use the project management side of it across different teams to manage and track the progress of tasks. It saves us tremendous time have all of our information in one central place.</p>
                        <span>Matt Stewart, Product Director</span>
                        <label>Pleased.com</label>
                        <div className="quama">
                            <img src="https://idexinnovation.com/static/media/quote.3bd5a07f.svg" alt="white quama pic" />
                        </div>
                    </div>

                    <div className="feedback">
                        <p>Before IDEX, we used email threads to exchange and manage ideas. Now our employees are able to easily submit their ideas in one platform. IDEX really helps us to increase efficiency in collecting ideas and selecting actionable ideas to implement.</p>
                        <span>Jason Peterson, Managing Director</span>
                        <label>Fresh Link</label>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default TrstdBy;