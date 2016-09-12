import './css/reset.css';
import './css/main.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/unify/css/style.css';
import './css/unify/plugins/sky-forms-pro/skyforms/css/sky-forms.css';
import './css/unify/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import $ from 'jquery';
import _ from 'lodash';

import Header from './component/header.js';
import PageUser from './component/page_user.js';
import PageUserList from './component/page_user_list.js';
import PageUserFollwingRecommend from './component/page_user_following_recommend.js';
import PageTagList from './component/page_tag_list.js';
import Footer from './component/footer.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
            <IndexRoute component={ PageUserList } />
            <Route path="/user/:userId/userList" component={ PageUserList } />
            <Route path="/user/:userId" component={ PageUser } />
            <Route path="/user/:userId/following" component={ PageUserFollwingRecommend } />
            <Route path="/tagList" component = { PageTagList } />
        </Route>
    </Router>
), document.getElementById('root'));