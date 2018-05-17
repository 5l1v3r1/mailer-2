
const taskOrder = [
    'GENERATE_EMAILS',
    'EDIT_EMIALS',
    'CREATE_MESSAGE',
    'DONE'
];

const Tasks = {
    GENERATE_EMAILS: 'GENERATE_EMAILS',
    EDIT_EMIALS: 'EDIT_EMIALS',
    CREATE_MESSAGE: 'CREATE_MESSAGE',
    DONE: 'DONE',
    getNextTask(currentTask) {
        // Move to the next in the list
        let nextTaskIndex = (taskOrder.indexOf(currentTask) + 1) % taskOrder.length;
        return taskOrder[nextTaskIndex];
    },
    getTaskIndex(task) {
        return taskOrder.indexOf(task);
    }
}

export default Tasks;