const initialState = {
    tasks: {
        'task-1' : { id : 'task-1', content: 'Thing 1'},
        'task-2' : { id : 'task-2', content: 'Thing 2'},
        'task-3' : { id : 'task-3', content: 'Thing 3'},
        'task-4' : { id : 'task-4', content: 'Thing 4'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do', 
            taskIds: [ 'task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder : ['column-1']
};

export default initialState;
