import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSkill} from "../utlis/addSkill";
import SkillLine from "./SkillLine";
import {MdAddCircle, MdDragIndicator} from "react-icons/md";
import { Draggable, Droppable } from "react-beautiful-dnd";

const SkillsGroup = ({title, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  if (!skillType) return null;

  return (
    <Draggable draggableId={`SKILLS_GROUP-${index}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex-col-gap-2 mb-4 p-2 rounded ${snapshot.isDragging ? "bg-indigo-700/50" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div {...provided.dragHandleProps} className="cursor-grab">
              <MdDragIndicator className="text-white text-2xl" />
            </div>
            <h2 className="input-title mb-0">{title}</h2>
          </div>
          
          <Droppable 
            droppableId={`SKILLS_LIST-${index}`} 
            type="SKILLS_LIST"
            isDropDisabled={false} 
            isCombineEnabled={false} 
            ignoreContainerClipping={false}
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-2 mt-2">
                {skillType.skills.map((skill, skillIndex) => (
                  <SkillLine key={skillIndex} skill={skill} title={title} index={skillIndex} groupIndex={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* Add new skill button */}
          <button type="button" onClick={() => addSkill(title, setResumeData)}
                  aria-label="Add"
                  className="p-2 w-[37px] text-white bg-indigo-700 rounded text-xl mt-1">
            <MdAddCircle/>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default SkillsGroup;
