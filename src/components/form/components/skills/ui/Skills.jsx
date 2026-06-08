import React, {useContext} from 'react';
import {ResumeContext} from "../../../../builder";
import SkillsGroup from "../components/SkillsGroup";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Skills = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "SKILLS_GROUPS") {
      const newSkills = Array.from(resumeData.skills);
      const [reorderedItem] = newSkills.splice(source.index, 1);
      newSkills.splice(destination.index, 0, reorderedItem);

      setResumeData({ ...resumeData, skills: newSkills });
      return;
    }

    if (type === "SKILLS_LIST") {
      const groupIndex = parseInt(source.droppableId.split("-")[1]);
      const newSkills = Array.from(resumeData.skills);
      const newGroupSkills = Array.from(newSkills[groupIndex].skills);
      const [reorderedItem] = newGroupSkills.splice(source.index, 1);
      newGroupSkills.splice(destination.index, 0, reorderedItem);
      
      newSkills[groupIndex].skills = newGroupSkills;
      setResumeData({ ...resumeData, skills: newSkills });
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable 
        droppableId="skills-group-droppable" 
        type="SKILLS_GROUPS"
        isDropDisabled={false} 
        isCombineEnabled={false} 
        ignoreContainerClipping={false}
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {resumeData.skills.map((skill, index) => (
              <SkillsGroup
                title={skill.title}
                key={index}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Skills;
