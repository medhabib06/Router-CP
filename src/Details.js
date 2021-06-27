import React from 'react';
import "./App.css";

const Details = () => {
    return (
        <div className="details">
            <div>
                <iframe width="917" height="516" src="https://www.youtube.com/embed/KPLWWIOCOOQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                <br/>
                <br/>
                <br/>
                <p style={{fontWeight:'bold'}}>Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns
                    after being dormant for millennia.</p>
            </div>
        </div>
    );
};

export default Details;