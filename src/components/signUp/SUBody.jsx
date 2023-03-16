import React  from 'react';
import '../../App.css';

const SUBody = () => {
    return(
        <body>



        <section id="section3" className="container-fluid">

            <form id="RSignUpForm" className="needs-validation" noValidate>
                <div className="row">

                    <div className="col-md-3">
                        <div className="contact-info">
                            <img id="RestaurantPicture" src="MS_images/Restaurant.jpg"/>
                            <h1>RESTAURANT SIGN-UP</h1>
                            <h2>Thank you for donating food!</h2>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="contact-form">

                            <div className="form-group">
                                <label className="form-label col-sm-4" htmlFor="fname">Restaurant Name
                                    (Username)*:</label>
                                <input type="text" className="form-control" id="fname" placeholder="Nombre">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="pass">Password*:</label>
                                <input type="text" className="form-control" id="pass" placeholder="Password">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="email">Email *:</label>
                                <input type="email" className="form-control" id="email" placeholder="Email">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="phone">Phone Number *:</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Phone Number">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="address">Address *:</label>
                                <input type="text" className="form-control" id="address" placeholder="Address">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="license">License Number *:</label>
                                <input type="text" className="form-control" id="license" placeholder="License">
                                    <p>Incorrect</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <label className="form-label col-sm-2" htmlFor="comment">Comments:</label>
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="TeryC">
                                    <label className="form-check-label" htmlFor="TeryC">Accept Terms and Conditions
                                        *.</label>
                                    <p>Please accept.</p>
                                </input>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button id="submit" type="submit" className="btn btn-default">Send</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </section>
        </body>
    );
}

export default SUBody;