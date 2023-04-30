
import prisma from '@/lib/prisma'

async function getTodoAll(_:any, __:any,___:any, info:any){
    info.cacheControl.setCacheHint({ maxAge: 60 });
    return await prisma.todo.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' }
    })

}

export default {
    getTodoAll
}