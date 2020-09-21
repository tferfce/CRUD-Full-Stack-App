import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header className="header">              
                        <a href="http://localhost:3000/" className ="header">Supplier Management</a>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;