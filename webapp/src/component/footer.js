import './../css/unify/css/footers/footer-v2.css';

import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
        <div id="footer-v2" className="footer-v2">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 md-margin-bottom-40">
                            <div className="headline"><h2 className="heading-sm">Useful Links</h2></div>
                            <ul className="list-unstyled link-list">
                                <li><a href="#">About us</a><i className="fa fa-angle-right"></i></li>
                            </ul>
                        </div>

                        <div className="col-md-9 md-margin-bottom-40">
                            <div className="headline"><h2 className="heading-sm">Contact Us</h2></div>
                            <address className="md-margin-bottom-40">
                                <i className="fa fa-envelope"></i>Email: <a href="mailto:hfcc8685@gmail.com">hfcc8685@gmail.com</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}