import './../css/unify/css/pages/profile.css';

import React from 'react';

export default class UserCardDetail extends React.Component {
    render() {
        return (
            <div className="profile-bio">
                <div className="row">
                    <div className="col-md-9">
                        <h2>Edward Rooster</h2>
                        <span><strong>Job:</strong> Web Developer</span>
                        <span><strong>Position:</strong> Web Designer</span>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
                        <p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-profile">
                            <div className="panel-heading overflow-h">
                                <h2 className="panel-title heading-sm pull-left"><i className="fa fa-users"></i> Social Contacts</h2>
                            </div>
                            <div className="panel-body">
                                <ul className="list-unstyled social-contacts-v2">
                                    <li><i className="rounded-x tw fa fa-twitter"></i> <a href="#">edward.rooster</a></li>
                                    <li><i className="rounded-x fb fa fa-facebook"></i> <a href="#">Edward Rooster</a></li>
                                    <li><i className="rounded-x sk fa fa-skype"></i> <a href="#">edwardRooster77</a></li>
                                    <li><i className="rounded-x gp fa fa-google-plus"></i> <a href="#">rooster77edward</a></li>
                                    <li><i className="rounded-x gm fa fa-envelope"></i> <a href="#">edward77@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}