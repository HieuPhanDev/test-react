import React from 'react';
class MyComponent extends React.Component {
    state = { name: "Hieu Phan Dev", address: "HCM", age: 20 };

    handleclick(event){
        this.setState({
            name: "Dev",
            age: 19
        })
    }
    handleOnChangeInput(event){
        this.setState({
            name: event.target.value,
            age: 19
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm form {this.state.address} now I'm {this.state.age} years old
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input
                    type='text'
                    onChange={(event) => {this.handleOnChangeInput(event)}}
                    />
                    <button>submit</button>
                </form>
            </div>
            
        );
    }
}
export default MyComponent;