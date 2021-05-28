import React from 'react';
import { Link } from 'react-router-dom';

export default function Bidding() {
    return (
        <div className="App">
            <nav>
                <Link to="/" className="">Go Back</Link>
                <h1>PrimeBid Excel</h1>
            </nav>
            <h1 className="video-title">PrimeBid Excel Usage Video:</h1>
            <div className="video-container">
                <iframe title="Prime Bid Excel usage video" width={45 + "%"} height={40 + "%"} src="https://youtube.com/embed/DWPjwMcuEyQ?mute=1"> </iframe>
                <div className="desc-container">
                    <p className="video-description">
                        The development of PrimeBid Excel started after talking to some Project Managers at Jody Miller Construction, for a few years now they have been using PrimeBid which is a bid-analysis software that is no longer in development, making windows updates and other software changes cause
                        crashes and broken functionality of the app. They provided me with the program, as well as what they needed from it in the recreated version. I knew that creating something like this completely from scratch would be nearly impossible in a smaller timeline and because PrimeBid
                        looked similar to Excel we decided trying to make it based off of that would be the best choice.
                    </p>
                    <p className="video-description">
                        At the start of this project I didn't even know that you could create custom code for Excel, let alone the Visual Basic for Applications language that it uses, so after learning the basics for about a day I started messing around to see if this or something close would even be
                        possible. As you can probably tell, it was, even though about a week in I was starting to think otherwise, because of the analysis features it needed to have. For example if a bid covered 3 sections and the total cost for those was $100 but 2 other bids combined that covered
                        the same 3 sections only totalled up to $75 it needed to pick those over the single bid, this gets progressively tougher if a bid were to cover 10 different sections and it had to try to go through the other bids to create a selection that covers all of those for less. After
                        about 50 hours of development I have created up to version 1.5, with each new version adding features that were requested, as well as fixing the loads of bugs
                        that came with the prior update.
                    </p>
                    <p className="video-description">
                        As of right now I am still working on final touches and new features that PrimeBid had that weren't as important as the main functionality was. There are still many things that are yet to be done, most of which are fixing the "pickyness" of the app which will improve usabilty,
                        but other than that it functions as it should and has the ability to find the best combination of bids!
                    </p>
                </div>
            </div>
        </div>
    )
}
