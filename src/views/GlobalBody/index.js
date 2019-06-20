import React from 'react';

function GlobalBody(props){
    return(
        <div className="global-body gv-body">
            <div className="static-head-text text-center offwhite-bg"> If we don't change the world, then who will?
                <div className="content-text">Global Volunteer is a cross-cultural experience for youth who want to gain
                    personal development and leave an impact on the world.</div>
            </div>
            <div className="main-info flex-container">
                <div className="section-image-left">
                    <img className="img-responsive"
                         src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/static_images/gv_benefits_2x.jpg"
                         alt="Benefits of Global Volunteer"/>
                </div>
                <div className="section-info-right">
                    <div className="info-container">
                        <div className="info-content">
                            <div className="info-image">
                                <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-1_v2.svg"
                                     alt="Experience new cultures"/>
                            </div>
                            <div className="info-text">
                                <p className="info-head">Experience new cultures</p>
                                <p>There's nothing quite like being in a brand new country, living and volunteering with
                                    people
                                    from all around. Imagine the things you'd learn!</p>
                            </div>
                        </div>

                        <div className="info-content">
                            <div className="info-image">
                                <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-2.svg" alt="Make your Impact"/>
                            </div>
                            <div className="info-text">
                                <p className="info-head">Make your impact</p>
                                <p>You can make a difference in the world, it starts with that first step. Contribute
                                    towards the Sustainable Development Goals and tackle the issues you're most passionate
                                    about.</p>
                            </div>
                        </div>
                        <div className="info-content">
                            <div className="info-image">
                                <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-3.svg"
                                     alt="Challenge yourself"/>
                            </div>
                            <div className="info-text">
                                <p className="info-head">Push yourself out of your comfort zone</p>
                                <p>If you don't try and experience new things, you'll never find your full potential.
                                    Challenge yourself, and discover the best version of you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container space-out-section">
                <div className="flex-parent-2">
                    <div className="flex-child-2">
                        <h1 className="headings-text-left">Volunteer for the Global Goals</h1>
                        <p className="content-text"><strong>Why do we provide Global Volunteer experiences?</strong></p>
                        <p className="content-text mb30">Our Global Volunteer projects around the world exist because as
                            AIESEC, we
                            choose to shape what we do around what the world needs. We have committed to creating a youth
                            movement to achieve the 17 Sustainable Development Goals by the year 2030.<br/><br/>This all
                            falls
                            under our Youth 4 Global Goals initiative aimed at activating youth to achieve the Sustainable
                            Development Goals.
                        </p>
                        <a className="red-underline-btn text-center" target="_blank" href="#">Learn more</a>
                    </div>
                    <div className="flex-child-2 text-center">
                        <img width="80%" src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/y4gg.gif"
                             alt="Youth 4 Global Goals"/>
                    </div>
                </div>
            </div>

            <div className="offwhite-bg">
                <div className="space-out-section hidden-md-down">
                    <div className="container video-card">
                        <div className="flex-parent-2">
                            <div className="flex-child-2">
                                <video className="full-width" width="550" preload="none" controls>
                                    <source src="https://aiesec-bk.oss-cn-hangzhou.aliyuncs.com/Images/AIESEC%20Global%20Volunteer%20Introduction%20Video.mp4"
                                            type="video/mp4" />
                                    Browser not supported
                                </video>
                            </div>
                            <div className="flex-child-2">
                                <div className="text-center">
                                    <img src="https://cdn-expa.aiesec.org/icons-v2/gv-logo.png" alt="Global Volunteer Logo"/>
                                </div>
                                <p className="video-text">"When I got here and saw a different reality, it changed me more than
                                    I
                                    could change them."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container space-out-section">
                <div className="flex-parent-2">
                    <div className="flex-child-2">
                        <div className="headings-text-left">What will you gain?</div>
                        <ul className="custom-ul-li">
                            <li className="li-1">
                                <div className="content-text">Engage with all kinds of people towards achieving a purpose
                                    bigger
                                    than yourself. It's how you can empower others.
                                </div>
                            </li>
                            <li className="li-2">
                                <div className="content-text">Volunteering abroad isn't easy, but surpassing challenges is what
                                    makes it worth it. You learn how to be solution-oriented.
                                </div>
                            </li>
                            <li className="li-3">
                                <div className="content-text">Making your contribution and seeing your impact in real-time will
                                    show you that you can indeed make a difference the world. Become that world citizen
                                    that's
                                    needed more than ever.
                                </div>
                            </li>
                            <li className="li-4">
                                <div className="content-text">Going beyond what you know opens up new worlds for you. Find your
                                    values, explore your passions, and become more self-aware.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-child-2 text-center">
                        <div className="mission-img">
                            <img src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM_artboard.png" alt="Gain Benefits"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="count-up-counter ptb60 offwhite-bg">
                <div className="container">
                    <div className="flex-parent-3">
                        <div className="flex-child-3 text-center">
                            <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/world-gv-youth.svg"
                                 alt="Countries covered"/>
                            <p>120+</p>
                            <p>Countries covered</p>
                        </div>
                        <div className="flex-child-3 text-center">
                            <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/members-gv-youth.svg"
                                 alt="Last year experiences"/>
                            <p>50000+</p>
                            <p>Last year experiences</p>
                        </div>
                        <div className="flex-child-3 text-center">
                            <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/positions-gv-youth.svg"
                                 alt="Positions opened"/>
                            <p>60000+</p>
                            <p>Positions opened</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-out-section white-bg">
                <div className="four-box-flow">
                    <h1 className="italics-heading">A life-changing experience a few clicks away</h1>
                    <div className="flex-parent-4">
                        <div className="flex-child-4 border-top-red">
                            <h4 className="red-text">1. Sign up and connect</h4>
                            <p>Build your profile on the AIESEC Opportunities Portal and we can start matching you with
                                opportunities.</p>
                        </div>
                        <div className="flex-child-4 border-top-red">
                            <h4 className="red-text">2. Search</h4>
                            <p>Filter search results to find the perfect opportunity that fits your skills and interests.</p>
                        </div>
                        <div className="flex-child-4 border-top-red">
                            <h4 className="red-text">3. Interview</h4>
                            <p>Once we find a match, we can start the process of organizing interviews and putting things
                                in
                                place for your internship.</p>
                        </div>
                        <div className="flex-child-4 border-top-red">
                            <h4 className="red-text">4. Confirm and Go</h4>
                            <p>Congratulations! You’ll have made it through the interview. From here we’ll get you prepared
                                for
                                your new adventure.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="white-bg">
                <div className="flex-container long-info-section">
                    <div className="section-image-left">
                        <img className="img-responsive"
                             src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/static_images/gv_support_2x.jpg"
                             alt="Our Support"/>
                    </div>
                    <div className="section-info-right">
                        <div className="info-container">
                            <h1 className="italics-text">Feel at ease with our support</h1>
                            <div className="info-content">
                                <div className="info-image">
                                    <img src="https://cdn-expa.aiesec.org/icons/logistics.svg" alt="logistics support"/>
                                </div>
                                <div className="info-text">
                                    <p className="info-head">Logistics Support</p>
                                    <p>We ensure you get the right visa, arrival pick-up information before your experience
                                        and
                                        departure instructions post-experience.</p>
                                </div>
                            </div>

                            <div className="info-content">
                                <div className="info-image">
                                    <img src="https://cdn-expa.aiesec.org/icons/description.svg" alt="job description"/>
                                </div>
                                <div className="info-text">
                                    <p className="info-head">Clear job description</p>
                                    <p>We accompany you to the workplace on the first day, ensure your job description and
                                        goals are clear, and working hours/duration align to the initial description.</p>
                                </div>
                            </div>

                            <div className="info-content">
                                <div className="info-image">
                                    <img src="https://cdn-expa.aiesec.org/icons/shield.svg" alt="Safe living conditions"/>
                                </div>
                                <div className="info-text">
                                    <p className="info-head">Safe living conditions</p>
                                    <p>Life and health insurance is mandatory for taking part in AIESEC. You will get
                                        information about accommodation and basic living costs.</p>
                                </div>
                            </div>
                            <div className="info-content">
                                <div className="info-image">
                                    <img src="https://cdn-expa.aiesec.org/icons/learning.svg" alt="Learning experience"/>
                                </div>
                                <div className="info-text">
                                    <p className="info-head">Learning experience</p>
                                    <p>We set clear expectations, provide cultural preparation and facilitate learning
                                        spaces
                                        before and during experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="link-wrapper mtb60">
                        <a className="red-underline-btn" href="#">View Opportunities</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GlobalBody;