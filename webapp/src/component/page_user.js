import './../css/unify/css/pages/profile.css';
import './../css/unify/css/pages/shortcode_timeline2.css';
import './../css/unify/plugins/sky-forms-pro/skyforms/css/sky-forms.css';
import './../css/unify/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css';

import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="container content profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-body">
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

                            <div className="row">
                                <div className="col-md-9">
                                    <div className="panel panel-profile">
                                        <div className="panel-heading overflow-h">
                                            <h2 className="panel-title heading-sm pull-left"><i className="fa fa-heart red"></i> Loved</h2>
                                            <a href="#"><i className="fa fa-cog pull-right"></i></a>
                                        </div>
                                        <div className="panel-body margin-bottom-40">
                                            <ul className="timeline-v2 timeline-me">
                                                <li>
                                                    <time dateTime="" className="cbp_tmtime"><span>Mobile Design</span> <span>2012 - Current</span></time>
                                                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                                                    <div className="cbp_tmlabel">
                                                        <h2>BFC NYC Partners</h2>
                                                        <p>Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Peasprouts wattle seed rutabaga okra yarrow cress avocado grape.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <time dateTime="" className="cbp_tmtime"><span>Web Designer</span> <span>2007 - 2012</span></time>
                                                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                                                    <div className="cbp_tmlabel">
                                                        <h2>Freelance</h2>
                                                        <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <time dateTime="" className="cbp_tmtime"><span>Photodesigner</span> <span>2003 - 2007</span></time>
                                                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                                                    <div className="cbp_tmlabel">
                                                        <h2>Toren Condo</h2>
                                                        <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce. Celery coriander bitterleaf epazote radicchio shallot.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="panel panel-profile">
                                        <div className="panel-heading overflow-h">
                                            <h2 className="panel-title heading-sm pull-left"><i className="fa fa-filter"></i> Types</h2>
                                        </div>
                                        <div className="panel-body">
                                        <form action="#" className="sky-form">
                                            <ul className="list-unstyled social-contacts-v2">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/>
                                                        <i></i>
                                                        Video
                                                    </label>
                                                </li>
                                            </ul>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}