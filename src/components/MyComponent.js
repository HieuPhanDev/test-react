import React from 'react';
class MyComponent extends React.Component {
    state = { name: "Hieu Phan Dev", address: "HCM", age: 20 };
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm form {this.state.address} now I'm {this.state.age} years old
            </div>
        );
    }
}
export default MyComponent;