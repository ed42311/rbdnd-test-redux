import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

function Task({ id, content, index }) {
    return (
        <Draggable key={ id } draggableId={ id } index={ index }>
           {(provided, snapshot) => (
                <Container 
                    {...provided.draggableProps}
                    ref={ provided.innerRef }
                    isDragging = {snapshot.isDragging}
                >
                    <Handle {...provided.dragHandleProps} />
                    { content }
                </Container>
           )}
        </Draggable>
    );
}

const Container = styled.div`
    margin-bottom: 8px;
    border: ${ props => ( props.isDragging ? '.5px solid darkgrey' : '1px solid lightgrey' )};
    border-radius: 2px;
    padding: 8px;
    background-color: ${ props => ( props.isDragging ? 'lightgreen' : 'white' )};
    transition: background-color 2s ease-in-out, border 1s linear;
    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    margin-right: 5px;
    border-radius: 2px;
`;

Task.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    index: PropTypes.number
}

export default Task;