import React from 'react';

const Carousel = () => {
    return (
        <div>
            <section className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-7">
                                    <h1>Cool Dude Headphone</h1>
                                    <p>This is the best headphone in the world for people who just want to waste time in front of funky world.</p>
                                    <h2 className="colorrr">$420</h2>
                                    <button type="button" className="btn buttonnn">Warning</button>
                                </div>
                                <div className="col-lg-5">
                                    <img src="Image/headphone.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-7">
                                    <h1>Mega LCD TV For Sports</h1>
                                    <p>This is the best TV in the world for people who just want to waste time in front of Tv</p>
                                    <h2 className="colorrr">$420</h2>
                                    <button type="button" className="btn buttonnn">Warning</button>
                                </div>
                                <div className="col-lg-5">
                                    <img src="Image/tv.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-7">
                                    <h1>X-box for your living room</h1>
                                    <p>This is the best X-box in the world for people who just want to waste time in front of fake sports.</p>
                                    <h2 className="colorrr">$420</h2>
                                    <button type="button" className="btn buttonnn">Warning</button>
                                </div>
                                <div className="col-lg-5">
                                    <img src="Image/xbox.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;