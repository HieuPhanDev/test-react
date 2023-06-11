import React from "react";
import { useState } from "react";

import "./DisplayInfo.scss"
// import logo from "../logo.svg"
// class DisplayInfo extends React.Component {
//     state = {
//         showListUser: true
//     }
//     handleShowItem = () => {
//         this.setState({
//             showListUser: !this.state.showListUser
//         })
//     }

//     render() {
//         const { listUser } = this.props;
//         return (
//             <div>
//                 {/* <img src={logo}/> */}
//                 <div>
//                     <span onClick={() => { this.handleShowItem() }}>{this.state.showListUser===true?"Hide User":"Show User"}</span>
//                 </div>
//                 {
//                     listUser.map((user) => {
//                         return (

//                             <div key={user.id}>
//                                 {this.state.showListUser &&
//                                     <div className={user.age > 19 ? "red" : "blue"}>

//                                         <div>My name is {user.name} Im {user.age} years old</div>
//                                         <button onClick={() => {this.props.handleDeleteUser(user.id)}}>X</button>
//                                         <hr />
//                                     </div>
//                                 }
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfo = (props) => {
    const { listUser } = props;
    const [showListUser, setshowListUser] = useState(true)
    const handleShowItem = () => {
        setshowListUser(!showListUser)
    }
    return (
        <div>
            <div>
                {/* <span onClick={() => { this.handleShowItem() }}>{this.state.showListUser === true ? "Hide User" : "Show User"}</span> */}
                <span onClick={() => handleShowItem()}>
                    {showListUser === true ? "Hide" : "Show"}
                </span>
            </div>
            {
                listUser.map((user) => {
                    return (

                        <div key={user.id}>
                            {showListUser &&
                                <div className={user.age > 19 ? "red" : "blue"}>

                                    <div>My name is {user.name} Im {user.age} years old</div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>X</button>
                                    <hr />
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayInfo