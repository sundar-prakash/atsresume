import React, {useContext} from 'react';
import {handleSkill} from "../utlis/handleSkill";
import {ResumeContext} from "../../../../builder";
import { BsTrash3 } from 'react-icons/bs';
import {removeSkill} from "../utlis/removeSkill";
import {MdDragIndicator} from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

const SkillLine = ({skill, title, index, groupIndex}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <Draggable draggableId={`SKILL_ITEM-${groupIndex}-${index}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex gap-2 items-center ${snapshot.isDragging ? "opacity-75" : ""}`}
        >
          <div {...provided.dragHandleProps} className="cursor-grab">
            <MdDragIndicator className="text-white text-xl" />
          </div>
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
                  className="p-2 text-white bg-indigo-700 rounded text-xl">
            <BsTrash3 />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default SkillLine;
