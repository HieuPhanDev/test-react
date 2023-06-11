import React, { useState } from 'react';
// class AddUserInfo extends React.Component {
//     state = { name: "Hieu Phan Dev", address: "HCM", age: 20 };
//     handleOnChangeInput(event) {
//         this.setState({
//             name: event.target.value,
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,

//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1,
//             name:this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm form {this.state.address} now I'm {this.state.age} years old
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <input
//                         value={this.state.name}
//                         type='text'
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />
//                     <input
//                         value={this.state.age}
//                         type='text'
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfo = (props) => {
    const [name, setname] = useState("Hieu Phan Dev")
    const [address, setaddress] = useState("HCM")
    const [age, setage] = useState("20")
    const handleOnChangeInput = (event) => {
        setname(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setage(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            age: age
        })
    }
    return (
        <div>
            My name is {name} and I'm form {address} now I'm {age} years old
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => { handleOnChangeInput(event) }}
                />
                <input
                    value={age}
                    type='text'
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo;