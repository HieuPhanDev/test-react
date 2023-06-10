import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Hieu", age: 20 },
            { id: 2, name: "Phan", age: 19 },
            { id: 3, name: "Van", age: 18 }
        ]
    }
    render() {
        console.table(this.state.listUser)
        return (
            
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo listUser = {this.state.listUser}></DisplayInfo>
            </div>

        );
    }
}
export default MyComponent;