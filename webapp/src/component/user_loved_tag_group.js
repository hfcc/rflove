import React from 'react';

export default class UserLovedTagGroup extends React.Component {
    render (){
        return (
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
                            <li>
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                    <i></i>
                                    Video
                                </label>
                            </li>
                            <li>
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                    <i></i>
                                    Video
                                </label>
                            </li>
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
        );
    }
}