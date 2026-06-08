import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSkill} from "../utlis/addSkill";
import SkillLine from "./SkillLine";
import {MdAddCircle} from "react-icons/md";
import {BsChevronUp, BsChevronDown} from "react-icons/bs";

const SkillsGroup = ({title, index, moveGroup, totalGroups}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  if (!skillType) return null;

  const moveSkill = (skillIndex, direction) => {
    const newSkills = Array.from(resumeData.skills);
    const groupIndex = resumeData.skills.findIndex(s => s.title === title);
    if (groupIndex === -1) return;

    const groupSkills = Array.from(newSkills[groupIndex].skills);
    const targetIndex = direction === 'up' ? skillIndex - 1 : skillIndex + 1;
    if (targetIndex < 0 || targetIndex >= groupSkills.length) return;

    // Swap
    const temp = groupSkills[skillIndex];
    groupSkills[skillIndex] = groupSkills[targetIndex];
    groupSkills[targetIndex] = temp;

    newSkills[groupIndex].skills = groupSkills;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    <div className="flex flex-col gap-2 mb-4 p-2 rounded bg-indigo-700/20">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => moveGroup(index, 'up')}
          disabled={index === 0}
          className="p-1.5 text-white bg-indigo-700 rounded hover:bg-indigo-800 disabled:opacity-30 disabled:hover:bg-indigo-700"
          title="Move Group Up"
        >
          <BsChevronUp />
        </button>
        <button
          type="button"
          onClick={() => moveGroup(index, 'down')}
          disabled={index === totalGroups - 1}
          className="p-1.5 text-white bg-indigo-700 rounded hover:bg-indigo-800 disabled:opacity-30 disabled:hover:bg-indigo-700"
          title="Move Group Down"
        >
          <BsChevronDown />
        </button>
        <h2 className="input-title mb-0 ml-1">{title}</h2>
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        {skillType.skills.map((skill, skillIndex) => (
          <SkillLine 
            key={skillIndex} 
            skill={skill} 
            title={title} 
            index={skillIndex} 
            totalSkills={skillType.skills.length}
            moveSkill={moveSkill}
          />
        ))}
      </div>

      {/* Add new skill button */}
      <button type="button" onClick={() => addSkill(title, setResumeData)}
              aria-label="Add"
              className="p-2 w-[37px] text-white bg-indigo-700 rounded text-xl mt-1 hover:bg-indigo-800">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default SkillsGroup;
