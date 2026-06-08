import React, {useContext} from 'react';
import {handleSkill} from "../utlis/handleSkill";
import {ResumeContext} from "../../../../builder";
import { BsTrash3, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import {removeSkill} from "../utlis/removeSkill";

const SkillLine = ({skill, title, index, totalSkills, moveSkill}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        onClick={() => moveSkill(index, 'up')}
        disabled={index === 0}
        className="p-2 text-white bg-indigo-700 rounded hover:bg-indigo-800 disabled:opacity-30 disabled:hover:bg-indigo-700"
        title="Move Skill Up"
      >
        <BsChevronUp className="text-sm" />
      </button>
      <button
        type="button"
        onClick={() => moveSkill(index, 'down')}
        disabled={index === totalSkills - 1}
        className="p-2 text-white bg-indigo-700 rounded hover:bg-indigo-800 disabled:opacity-30 disabled:hover:bg-indigo-700"
        title="Move Skill Down"
      >
        <BsChevronDown className="text-sm" />
      </button>
      <input
        type="text"
        placeholder={title}
        name={title}
        className="w-full mb-0 other-input"
        value={skill}
        onChange={(e) => handleSkill(e, index, title, resumeData, setResumeData)}
      />
      <button type="button" onClick={() => {
        console.log("remove", title, index)
        removeSkill(title, setResumeData, index)
      }}
              aria-label="Remove"
              className="p-2 text-white bg-indigo-700 rounded text-xl hover:bg-indigo-800">
        <BsTrash3 />
      </button>
    </div>
  );
};

export default SkillLine;
