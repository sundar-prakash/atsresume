import React, {useContext} from 'react';
import {ResumeContext} from "../../../../builder";
import SkillsGroup from "../components/SkillsGroup";

const Skills = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const moveGroup = (index, direction) => {
    const newSkills = Array.from(resumeData.skills);
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSkills.length) return;
    
    // Swap
    const temp = newSkills[index];
    newSkills[index] = newSkills[targetIndex];
    newSkills[targetIndex] = temp;
    
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    <div className="flex flex-col gap-4">
      {resumeData.skills.map((skill, index) => (
        <SkillsGroup
          title={skill.title}
          key={index}
          index={index}
          moveGroup={moveGroup}
          totalGroups={resumeData.skills.length}
        />
      ))}
    </div>
  );
};

export default Skills;
