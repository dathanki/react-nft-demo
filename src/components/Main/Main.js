import React, { useState, useEffect } from 'react'
import instagramLogo from './../../assets/owner/instagram.png'
import twitterLogo from './../../assets/owner/twitter.png'
import moreIcon from './../../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])


    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className="selectedPunk"
                            src={activePunk.image_original_url}
                        />
                    </div>
                </div>
                <div className="punkDetails">
                    <div className="title">
                        {activePunk.name}
                        <span className="itemNumber"> Mint #{activePunk.token_id}</span>
                    </div>

                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url} />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div className="ownerAddress">{activePunk.owner.address}</div>
                                <div className="ownerHandle">@Satoshi</div>
                            </div>
                            <div className="ownerLink">
                                <img src={instagramLogo} />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main
