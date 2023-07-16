import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy Name",
        location: "Dummy Location",
        avatar_url: ""
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/1hiteshk"); 
    const json = await response.json();
    this.setState({
      userInfo: {
        login: json.login,
        location: json.location,
        avatar_url: json.avatar_url
      }
    });
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;

    return (
      <div className="justify-center flex ">
      
        <img className="h-[200px] w-[200px] rounded justify-center flex" src={avatar_url} alt="User Avatar" />
        {/* <h3>User id: {login}</h3>
        <h2>Location: {location}</h2> */}
      </div>
    );
  }
}

export default Profile;