import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Hieu", age: 20 },
            { id: 2, name: "Phan", age: 19 },
            { id: 3, name: "Van", age: 18 }
        ]
    }
    handleAddNewUser = (UserObj)=>{
        this.setState({
            listUser:[UserObj,...this.state.listUser]
        })
    }
    render() {
        return (
            
            <div>
                <AddUserInfo handleAddNewUser = {this.handleAddNewUser}>

                </AddUserInfo>
                <DisplayInfo listUser = {this.state.listUser}></DisplayInfo>
            </div>

        );
    }
}
export default MyComponent;