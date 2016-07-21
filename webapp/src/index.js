import './css/reset.css';
import './css/main.less';
import './css/timeline.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/unify/css/style.css';
import './css/unify/plugins/sky-forms-pro/skyforms/css/sky-forms.css';
import './css/unify/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Header from './component/header.js';
import PageUser from './component/page_user.js';
import PageUserList from './component/page_user_list.js';
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
    <Router>
        <Route component={Main}>
            <Route path="user" component={ PageUser } />
            <Route path="/" component={ PageUserList } />
        </Route>
    </Router>
), document.getElementById('root'));