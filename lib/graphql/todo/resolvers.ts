
import prisma from '@/lib/prisma'

async function getTodoAll(){

    return await prisma.todo.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' }
    })

}

export default {
    getTodoAll
}