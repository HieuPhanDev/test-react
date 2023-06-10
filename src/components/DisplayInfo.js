import React from "react";
class DisplayInfo extends React.Component {
    state = {
        showListUser: true
    }
    handleShowItem = () => {
        this.setState({
            showListUser: !this.state.showListUser
        })
    }
    render() {
        const { listUser } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowItem() }}>{this.state.showListUser==true?"Hide User":"Show User"}</span>
                </div>
                {
                    listUser.map((user) => {
                        return (
                            <div>
                                {this.state.showListUser &&
                                    <div key={user.id} className={user.age > 19 ? "red" : "blue"}>

                                        <div>My name is {user.name} Im {user.age} years old</div>
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
}
export default DisplayInfo