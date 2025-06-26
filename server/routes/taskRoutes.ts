import express from 'express';
import {
createTask,
getTasks,
updateTask,
deleteTask
}
    from '../controllers/taskController';

const router = express.Router();

// Route to create a new task
router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;