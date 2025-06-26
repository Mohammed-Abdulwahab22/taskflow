import { Request, Response } from "express";
import prisma from '../config/prismaClient';
import { AuthRequest } from "../middleware/auth";


export async function createTask(req: AuthRequest, res: Response) {
    try {
        const { title, description, dueDate, status, priority, tags } = req.body;

        const task = await prisma.task.create({
            data: {
                title,
                description,
                dueDate: dueDate ? new Date(dueDate) : undefined,
                status,
                priority,
                tags,
                userId: req.userID!
            }
        });

        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
}

export async function getTasks(req: AuthRequest, res: Response) {
    try {
        const tasks = await prisma.task.findMany({
            where: { userId: req.userID! },
            orderBy: { createdAt: 'desc' }
        });

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
}

export async function updateTask(req: AuthRequest, res: Response) {
    try {
        const { id } = req.params;
        const { title, description, dueDate, status, priority, tags } = req.body;

        const updatedTask = await prisma.task.update({
            where: {
                id: parseInt(id),
                userId: req.userID!
            },
            data: {
                title,
                description,
                dueDate: dueDate ? new Date(dueDate) : undefined,
                status,
                priority,
                tags
            }
        });

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
}

export async function deleteTask(req: AuthRequest, res: Response) {
    try {
        const { id } = req.params;

        await prisma.task.delete({
            where: {
                id: parseInt(id),
                userId: req.userID!
            }
        });

        res.status(204).end(); // No content
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
}


