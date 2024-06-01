import React from 'react';
import { useData } from '../contexts/DataContext';
import { useCourseContext } from '../contexts/CourseContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function CourseKanban(){
    const {coursesInP, coursesUpcoming} = useData();
    const { handleCourseStatus } = useCourseContext();

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;

        if (
            source.droppableId !== destination.droppableId ||
            source.index !== destination.index
        ) {
            
            const newStatus =
                destination.droppableId === 'in_progress'
                    ? 'In Progress'
                    : 'Upcoming';

            handleCourseStatus(draggableId, newStatus);
        }
    };

    return (
        <>
        <main className='md:flex gap-4'>
        <DragDropContext onDragEnd={onDragEnd}> 
            <Droppable droppableId="in_progress">
            {(provided) => (
                <div className="bg-indigo-50 dark:bg-indigo-200 rounded-3xl p-6 mb-4 md:mb-0" ref={provided.innerRef} {...provided.droppableProps}>
                    <h3 className="text-pink-700 mb-4 font-bold text-lg">In Progress</h3>
                    {coursesInP.map((course, index) => (
                    <Draggable key={course.title} draggableId={course.title} index={index}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="bg-white dark:bg-indigo-100 p-4 my-2" >
                                <h3 className="font-bold border-b-2 mb-4 pb-1">{course.title}</h3>
                                <p className="text-gray-500 my-2">{course.description}</p>
                                <p className=" text-lavender-300">assigned to: {course.assigned_to}</p>
                                <p className=" text-yellow-500">due to: {course.due_date}</p>
                            </div>
                        </div>
                    )}
                    </Draggable>
                ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
            <Droppable droppableId="upcoming">
            {(provided) => (
                <div className="bg-indigo-50 dark:bg-indigo-200 rounded-3xl p-6" ref={provided.innerRef} {...provided.droppableProps}>
                    <h3 className="text-pink-700 mb-4 font-bold text-lg">Upcoming</h3>
                    {coursesUpcoming.map((course, index) => (
                        <Draggable key={course.title} draggableId={course.title} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div className="bg-white dark:bg-indigo-100 p-4 my-2">
                                    <h3 className="font-bold border-b-2 mb-4 pb-1">{course.title}</h3>
                                    <p className="text-gray-500 my-2">{course.description}</p>
                                    <p className=" text-lavender-300">assigned to: {course.assigned_to}</p>
                                    <p className=" text-yellow-500">due to: {course.due_date}</p>
                                </div>
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
           
        </DragDropContext>
        </main>
        </>
    );
}