import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1>hello world! oh my God!</h1>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('content'));