import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import uuid from 'uuid';

import Column from './components/Column'

import { taskOnDragEnd } from './store/actions';

import '@atlaskit/css-reset';
import './App.css';

class App extends Component  {

  onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;

    const { droppableId: ddId, index: dIndex } = destination;
    const { droppableId: sdId, index: sIndex } = source;
    if (ddId === sdId && dIndex === sIndex ) return;

    this.props.taskOnDragEnd(result);
  }

  render () {
    return (
        <div className="App">
            <DragDropContext
              onDragEnd={this.onDragEnd}
            >
                {this.props.columnOrder.map(columnId => {
                    const column = this.props.columns[columnId]
                    const tasks = column.taskIds.map(taskId => this.props.tasks[taskId])

                    return <Column key={uuid()} column={column} tasks={tasks} />
                })}
            </DragDropContext>
        </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  taskOnDragEnd: (payload) => dispatch(taskOnDragEnd(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
