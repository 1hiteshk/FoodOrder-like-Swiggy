import { useState } from "react";

const Section = ({ title, description ,isVisible,setIsVisible,setIsVisibleSection}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(false);
          }}
          
        >
          Hide it
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className="cursor-pointer underline"
        >
          Show more..
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
 const [visibleSection,setIsVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        title={"About InstaMart"}
        description={
          "This is the about section if the instamart On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection == "about"}  //ye hai by default behaviour show hoga ki nhi initially
        setIsVisible={(display) =>{        // setisVisible ki initial default value true h qk useState variable h so display arg. me true ja rha hai
          if(display){
            setIsVisibleSection("about");
          } else{
            setIsVisibleSection("");
          }
        }} // click krne ke baad button pe about update hogya to show hoga ab
      />
      <Section
        title={"Team InstaMart"}
        description={
          "This is the Team section if the instamart On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection == "team"}
        setIsVisible={(display) =>{
          if(display){
            // console.log(display);
            setIsVisibleSection("team");
          } else{
            setIsVisibleSection("");
          }
        }}
       
      />
      <Section
        title={"Careers"}
        description={
          "This is the Team section if the instamart On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection == "careers"}
        setIsVisible={(display) =>{
          if(display){
            setIsVisibleSection("careers");
          } else{
            setIsVisibleSection("");
          }
        }}
       
      />
     
      {/* 
        <AboutInstaMart />
        <DetailsOfInstaMart />
        <Product />
        <Careers /> */}
    </div>
  );
};

export default Instamart;
