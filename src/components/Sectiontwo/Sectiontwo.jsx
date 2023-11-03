import React from "react";
import "./Sectiontwo.scss";
const Sectiontwo = () => {
    return (
        <div className="main">
            <div className="main-headings">
                <div className="main-heading-1 gradient">
                    Keeping up with all your needs
                </div>
                <div className="main-question">
                    <h1>Why Choose Us ?</h1>
                </div>
            </div>
            <div className="boxes">
                <div className="boxes-row">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-heading">Custom Design</div>
                            <div className="box-define">
                                You need a custom design so that your Website
                                stands out from the competetion and communicates
                                your brand uniquely
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <div className="box-heading">Web-Apps</div>
                            <div className="box-define">
                                You don’t just need an information brochure. We
                                create fully dynamic and interactive Web-Apps
                                that can boost your conversion rates multi-fold
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle"></div>
                <div className="boxes-row">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-heading">Independent Ecom</div>
                            <div className="box-define">
                                Why to rely on Shopify, when you can get a
                                better,customized and more affordable Ecom Store
                                with Admin Pannel
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <div className="box-heading">Seo Optimised</div>
                            <div className="box-define">
                                We create Websites using Next.js which provides
                                best SEO solutions to drive insane traffic
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectiontwo;
