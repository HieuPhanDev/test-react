import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';
// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: "Hieu", age: 20 },
//             { id: 2, name: "Phan", age: 19 },
//             { id: 3, name: "Van", age: 18 }
//         ]
//     }
//     handleAddNewUser = (UserObj) => {
//         this.setState({
//             listUser: [UserObj, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (UserId) => {
//         const listUserClone = [...this.state.listUser]; // Tạo bản sao mới của mảng listUser
//         const updatedListUser = listUserClone.filter((item) => item.id !== UserId); // Lọc ra các phần tử có id khác với id được truyền vào
//         this.setState({
//             listUser: updatedListUser})
//     }
//     render() {
//         return (

//             <div>
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser}

//                 />

//                 <DisplayInfo listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}></DisplayInfo>
//             </div>

//         );
//     }
// }
const MyComponent = (props) => {
    const [listUser, setlistUser] = useState(
        [
            { id: 1, name: "Hieu", age: 20 },
            { id: 2, name: "Phan", age: 19 },
            { id: 3, name: "Van", age: 18 }
        ]
    )
    const handleAddNewUser = (UserObj) => {
        setlistUser([UserObj, ...listUser])
    }
    const handleDeleteUser = (UserId) => {
        const listUserClone = [...listUser]; // Tạo bản sao mới của mảng listUser
        const updatedListUser = listUserClone.filter((item) => item.id !== UserId); // Lọc ra các phần tử có id khác với id được truyền vào
        setlistUser(updatedListUser)
    }
    return (

        <div>
            <AddUserInfo handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfo listUser={listUser}
                handleDeleteUser={handleDeleteUser}></DisplayInfo>
        </div>

    );
}
export default MyComponent;