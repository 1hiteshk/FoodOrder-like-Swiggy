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
      <div className="w-[100vh]  m-5 border border-black border-2px shadow-2xl justify-center mx-auto m">
        <span className="text-4xl font-bold m-4 justify-center flex underline">
        About Me
        </span>

        <userContext.Consumer>
          {({user}) => <h4 className="font-bold p-10">{user.name}-{user.email}</h4>}
        </userContext.Consumer>

        <Profile />
        <p className="m-3 font-bold text-gray-600 justify-center">  Frontend Developer who is passionate about developing web apps from scratch using modern tools & technology's seeking & open for opportunity, Eager to Leverage Skills and Drive Innovation.</p>
        <div className="flex justify-center">
        <a
          href={"https://www.linkedin.com/in/hitesh-kumar-394024236/"}
          className=""
          target="_blank"
        >
          <img className="h-12 w-12 p-2" src="data:image/png;base64,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"/>
         
        </a>
       
        <a href={"https://github.com/1hiteshk"} className="icon-button github" target="_blank">
          <img className="h-12 w-12 p-2" src="data:image/png;base64,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"/>
           
        </a>
        <a href={"1hiteshk@gmail.com"} className="icon-button email">
          <img className="h-12 w-12 p-2" src="https://static-00.iconduck.com/assets.00/gmail-icon-509x512-ikquhn8l.png"/>
            
        </a>
      </div>
      <h3 className="m-3 font-bold text-yellow-400 justify-center">Tools & Technology:  </h3>
        <ul>
            <li className="ml-7 p-1 font-bold text-gray-500 justify-center list-disc">Programming Languages: HTML, CSS, JavaScript </li>
            <li className="ml-7 p-1 font-bold text-gray-500 justify-center list-disc">Frontend Framework: React </li>
            <li className="ml-7 p-1 font-bold text-gray-500 justify-center list-disc">Version Control: Git </li>
        </ul>
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
