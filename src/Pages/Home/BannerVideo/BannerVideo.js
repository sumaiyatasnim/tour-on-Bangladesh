import React from 'react';
import bannerVideo from "../../../Video/Visit Bangladesh  - Life Happens Here_HIGH_01.mp4"
const BannerVideo = () => {
    return (
        <div className='container mt-5'>
            <div className="container-fluid video-sec mt-5">
                <div className="row row-cols-1">
                    <div className="col">
                        <video className=" w-100" controls>
                            <source src={bannerVideo} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <h6>Bangladesh has flourished herself as a beautiful country around the world due to its unlimited natural beauty like the longest sea beach in Cox's bazaar, the largest mangrove forest and the royal Bengal tiger in Sundarbans. Also you can see the ancient archaeological site.</h6>
            </div>
        </div>
    );
};

export default BannerVideo;