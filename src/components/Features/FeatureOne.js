import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {
            "preHeading": "Olive",
            "preHeadingspan": "Features",
            "heading": "3 Easy Steps",
            "headingText": "Organizing your next gifting event is only a few taps away. Whether you have a last second family Christmas part, a work gift exchange, or a friendsmas, Olive will do all the heavy lifting for you.",
            "headingTextTwo": "",


        },
        featureData: [
            {
                "id": 1,
                "image": "/img/wishlist.svg",
                "title": "Wishlists",
                "text": "Create your personal wishlist within the app. Share it with an event so others can see and claim items off your wishlist. View what you have to shop for in your shopping list."
            },
            {
                "id": 2,
                "image": "/img/event.svg",
                "title": "Events",
                "text": "Create or join a gifting event and view the items that other’s are asking for. You can even create an event where a special somebody is getting all the gifts, like a birthday party or a wedding registry."
            },
            {
                "id": 3,
                "image": "/img/featured_image_3.png",
                "title": "Anonymous and Secret",
                "text": "We want to keep your gifting experience special, so when you claim an item off of somebody’s wishlist, we never notify the owner. Only others gift seekers in your event will see you have claimed the item."
            }
        ]
    }
    // componentDidMount(){
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 featureData: res.data.featureData
    //             })
    //             // console.log(this.state.data)
    //         })
    //     .catch(err => console.log(err))
    // }
    render() {
        return (
            <section id="features" className="section features-area style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                                    <i className="far fa-lightbulb text-primary mr-1" />
                                    <span className="text-primary">{this.state.data.preHeading}</span> {this.state.data.preHeadingspan}
                                </span>
                                <h2>{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.featureData.map((item, idx) => {
                            return (
                                <div key={`fo_${idx}`} className="col-12 col-md-6 col-lg-4 res-margin">
                                    {/* Image Box */}
                                    <div className="image-box text-center icon-1 p-5">
                                        {/* Featured Image */}
                                        <div className="featured-img mb-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;