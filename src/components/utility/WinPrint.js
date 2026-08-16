import { MdPictureAsPdf } from "react-icons/md";
import React, { useContext } from "react";
import { ResumeContext } from "../builder";

const WinPrint = () => {
  const { resumeData } = useContext(ResumeContext);

  const print = () => {
    const cleanName = resumeData?.name?.trim()?.toLowerCase()?.replace(/\s+/g, "-");
    const cleanRole = resumeData?.position?.trim()?.toLowerCase()?.replace(/\s+/g, "-");
    
    let newTitle = "resume";
    if (cleanName && cleanRole) {
      newTitle = `${cleanName}-${cleanRole}-resume`;
    } else if (cleanName) {
      newTitle = `${cleanName}-resume`;
    }
    
    document.title = newTitle;
    window.print();
  };

  return (
    <button
      aria-label="Download Resume"
      className="exclude-print fixed bottom-5 right-10 font-bold rounded-full bg-white text-indigo-600 shadow-lg border-2 border-white"
      onClick={print}
    >
      <MdPictureAsPdf className="w-10 h-10" title="Download Resume" />
    </button>
  );
};

export default WinPrint;