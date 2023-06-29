import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component ,useContext} from "react";
import userContext from "../utils/userContext";


class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>

        <userContext.Consumer>
          {({user}) => <h4 className="font-bold p-10">{user.name}-{user.email}</h4>}
        </userContext.Consumer>

        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
