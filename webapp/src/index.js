import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
        return (
            <div>hello world</div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('content'));