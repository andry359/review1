import { useRef } from "react";
import CompletedProjectsBlock from "../components/CompletedProjectsBlock/CompletedProjectsBlock";
import ConnectWithUsBlock from "../components/ConnectWithUsBlock/ConnectWithUsBlock";
import ContactUsBlock from "../components/ContactUsBlock/ContactUsBlock";
import ModelDevelopment from "../components/ModelDevelopment/ModelDevelopment";
import TitlePage from "../components/UI/TitlePage/TitlePage";

function FamilyDevelopment() {

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView(); 

    return (
      <div className="familyDevelopmentp">
        <TitlePage />
        <ModelDevelopment />
        <ConnectWithUsBlock myRef={myRef}/>
        <CompletedProjectsBlock />
        <ContactUsBlock executeScroll={executeScroll}/>
      </div>
    );
  }
  
  export default FamilyDevelopment;
