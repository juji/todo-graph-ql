
import prisma from '@/lib/prisma'



async function createTodo(
    _:any, { text }:{ text: string }, __:any
){

    return prisma.todo.create({
        data: { text }
    })

}

async function removeTodo(
    _:any, { id }:{ id: string }, __:any
){

    return prisma.todo.update({
        where: { id },
        data: { deletedAt: new Date() }
    })

}

async function updateTodo(
    _:any, { id, text, done }:{ id: string, text: string, done: boolean }, __:any
){

    return prisma.todo.update({
        where: { id },
        data: { done, text }
    })

}

export default {
    createTodo,
    removeTodo,
    updateTodo
}