import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
    state = {
        data: {
            "linkText_1": "Useful Links",
            "linkText_2": "Product Help",
            "linkText_3": "Download",
        },
        iconList: [],
        footerList_1: [
            {
                "id": 1,
                "text": "Screenshots"
            },
            {
                "id": 2,
                "text": "Features"
            },
            {
                "id": 3,
                "text": "Contact"
            },
        ],
        footerList_2: [
            {
                "id": 2,
                "text": "Privacy Policy"
            },
            {
                "id": 3,
                "text": "Support"
            },
            {
                "id": 4,
                "text": "Terms & Conditions"
            },
        ],
        footerList_3: [
            {
                "id": 2,
                "image": "/img/app-store-black.png"
            }
        ]
    }
    // componentDidMount() {
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 iconList: res.data.iconList,
    //                 footerList_1: res.data.footerList_1,
    //                 footerList_2: res.data.footerList_2,
    //                 footerList_3: res.data.footerList_3
    //             })
    //             // console.log(this.state.data)
    //         })
    //         .catch(err => console.log(err))
    // }
    render() {
        return (
            <div>
                <div className="height-emulator d-none d-lg-block" />
                <footer className="footer-area footer-fixed">
                    {/* Footer Top */}
                    <div className="footer-top ptb_150">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    {/* Footer Items */}
                                    <div className="footer-items">
                                        {/* Footer Title */}
                                        <h3 className="footer-title mb-2">{this.state.data.linkText_1}</h3>
                                        <ul>
                                            {this.state.footerList_1.map((item, idx) => {
                                                return (
                                                    <li key={`flo_${idx}`} className="py-2"><a href={`#${item.text.toLowerCase()}`}>{item.text}</a></li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    {/* Footer Items */}
                                    <div className="footer-items">
                                        {/* Footer Title */}
                                        <h3 className="footer-title mb-2">{this.state.data.linkText_2}</h3>
                                        <ul>
                                            {this.state.footerList_2.map((item, idx) => {
                                                return (
                                                    <li key={`flt_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    {/* Footer Items */}
                                    <div className="footer-items">
                                        {/* Footer Title */}
                                        <h3 className="footer-title mb-2">{this.state.data.linkText_3}</h3>
                                        {/* Store Buttons */}
                                        <div className="button-group store-buttons store-black d-flex flex-wrap">
                                            {this.state.footerList_3.map((item, idx) => {
                                                return (
                                                    <a key={`flth_${idx}`} href="/#">
                                                        <img src={item.image} alt="" />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* Copyright Area */}
                                    <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                        {/* Copyright Left */}
                                        <div className="copyright-left">© Copyrights 2020 Olive All rights reserved.</div>
                                        {/* Copyright Right */}
                                        <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="/">by the team at Olive</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;