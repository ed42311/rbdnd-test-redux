import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

function Column({column, tasks}) {
    const { title, id } = column
    return (
        <Container>
            <Title>
               { title }
            </Title>
            <Droppable droppableId={ id }>
               {(provided, snapshot) => 
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={ snapshot.isDraggingOver }
                  >
                    {tasks.map((task, index) =>
                      <Task key={ task.id } { ...task } index={ index } />
                    )}
                    {provided.placeholder}
                  </TaskList>
                }
            </Droppable>
        </Container>
    );
}

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const Title = styled.h3`
    padding: 8px;
`;

const TaskList = styled.div`
    padding: 8px;
    background-color: ${ props => ( props.isDraggingOver ? 'skyblue' : 'white' )};
`;

Column.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
    })),
    column: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        taskIds: PropTypes.array
    }),
}

export default Column;
