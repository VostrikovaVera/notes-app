import React from 'react';
import './Container.scss';

class Container extends React.Component {
    render() {
        const {children} = this.props;

        return <div className="Container">{children}</div>
    }
}

export default Container;