import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import step1 from './img/step1.webp';
import step2 from './img/step2.webp';
import step3 from './img/step3.webp';
import step4 from './img/step4.webp';
import { MdArrowBack } from 'react-icons/md';

const images = [step1, step2, step3, step4]

export default function Bidding() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [photoCaption, setPhotoCaption] = useState("");

    useEffect(() => {
        switch (photoIndex) {
            case 0:
                setPhotoCaption('Step 1 - Sections Page data')
                break;
            case 1:
                setPhotoCaption('Step 2 - Creating a Matrix')
                break;
            case 2:
                setPhotoCaption('Step 3 - Inputting data on a Matrix')
                break;
            case 3:
                setPhotoCaption('Step 4 - Running the Summary Function')
                break;
            default:
                setPhotoCaption('Step 1 - Sections Page data')
        }
    }, [photoIndex])

    return (
        <div className="App">
            <nav>
                <Link to="/" className="goBack"><MdArrowBack /></Link>
                <h1>PrimeBid Excel</h1>
                <div></div>
            </nav>
            <h2 className="video-title">PrimeBid Excel Usage Video:</h2>
            <div className="video-container">
                <iframe title="Prime Bid Excel usage video" width="100%" height="100%" className="iFrame" src="https://youtube.com/embed/DWPjwMcuEyQ?mute=1"> </iframe>
            </div>
            <div className="App-center-col">
                <h2>The Development Process</h2>
                <div className="desc-container">
                    <p className="video-description">
                        The development of PrimeBid Excel started after talking to some Project Managers at Jody Miller Construction, for a few years 
                        now they have been using PrimeBid which is a bid-analysis software that is no longer in development, making Windows updates 
                        and other software changes cause the program to crash and sometimes leads to other broken features. They provided me with screenshots of the program, 
                        as well as what they needed from it in the recreated version. I knew that creating something like this 
                        completely from scratch would be nearly impossible in a smaller timeline and because PrimeBid looked similar to Excel we decided trying 
                        to make it based off of that would be the best choice.
                    </p>
                    <p className="video-description">
                        At the start of this project I didn't even know that you could create custom code for Excel, let alone how to code 
                        in the Visual Basic for Applications language that it uses, so after learning the basics for about a day I started 
                        messing around to see if this or something close would even be
                        possible. As you can probably tell, it was, even though about a week in I was starting to think otherwise, because of 
                        the analysis features it needed to have. For example if a bid covered 3 sections and the total cost for those was $100 
                        but 2 other bids combined that covered the same 3 sections only totalled up to $75 it needed to pick those over 
                        the single bid, this gets progressively tougher if a bid were to cover 10 different sections and it had to try to go 
                        through the other bids to create a selection that covers all of those for less. After about 50 hours of development 
                        I have created up to version 1.5, with each new version adding features that were requested, as well as fixing the loads 
                        of bugs that came with the prior update.
                    </p>
                    <p className="video-description">
                        As of right now I am still working on final touches and new features that PrimeBid had that weren't as important as the main functionality was. 
                        There are still many things that are yet to be done, most of which are fixing the "pickyness" of the app which will improve usabilty,
                        but other than that it functions as it should and has the ability to find the best combination of bids!
                    </p>
                </div>
                <h2>Basic Usage Overview</h2>
                {isOpen && (
                    <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images - 1) % images.length]}
                    onCloseRequest={() => {setIsOpen(false)}}
                    onMovePrevRequest={() => {setPhotoIndex((photoIndex + images.length - 1) % images.length)}}
                    onMoveNextRequest={() => {setPhotoIndex((photoIndex + 1) % images.length)}}
                    imageCaption={photoCaption}
                    />
                )}
                <div className="desc-container">
                    <p className="video-description">
                        Starting on the Sections page you would input the Section Codes, Section Names, and the quantity of each just like below. You can then use the Autofill divisions button on the right to automatically
                        fill in the data from the Codes Master Sheet based on the rounded down Section Code number. From here the Sections page is complete, and you would then move on to creating a Matrix
                    </p>
                    <img className="usage-img" src={step1} alt="Step 1 - sections page data" onClick={() => { setPhotoIndex(0); setIsOpen(true); }} />
                    <p className="video-description">
                        Now select the section codes that you want to make a matrix for, like seen below. You can hold down CTRL on your keyboard to select multiple if needed (dragging mutliple selections works too). 
                        After selecting the codes press CTRL + SHIFT + M on your keyboard to create a matrix with the Preliminary bid and section codes selected filled out for you.
                    </p>
                    <img className="usage-img" src={step2} alt="Step 2 - creating a matrix" onClick={() => { setPhotoIndex(1); setIsOpen(true); }} />
                    <p className="video-description">
                        After that you will want to put in the data you have like seen below with the ones meaning that that bid covers that section. If you want you can put in data and hit the "Find Best" button at any
                        point to see which bids are the best so far, you will need to delete the data that the function creates before adding or removing any more bids though, so that it doesn't get in the way. The 
                        next step is to repeat the the last step as many times as you need, then you can move on to running the final function.
                    </p>
                    <img className="usage-img" src={step3} alt="Step 3 - inputting data on a matrix" onClick={() => { setPhotoIndex(2); setIsOpen(true); }} />
                    <p className="video-description">
                        You can now go to the summary page and click on Update Summary Data to see all of the information in a summary view, this adds up the cost per division, as well as allows you to see the final costs
                        and add any extra fees in the form of percentages on the subtotal.
                    </p>
                    <img className="usage-img" src={step4} alt="Step 4 - running the summary function" onClick={() => { setPhotoIndex(3); setIsOpen(true); }} />
                </div>
            </div>
        </div>
    )
}
