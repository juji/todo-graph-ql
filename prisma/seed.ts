import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  const asdf = await prisma.todo.create({
    data: {text: 'asdf'}
  })

  await prisma.todoItem.create({
    data: {
      text: 'asdf1',
      todoId: asdf.id
    }
  })

  await prisma.todoItem.create({
    data: {
      text: 'asdf2',
      todoId: asdf.id
    }
  })

  const zxcv = await prisma.todo.create({
    data: {text: 'zxcv'}
  })

  await prisma.todoItem.create({
    data: {
      text: 'zxcv1',
      todoId: zxcv.id
    }
  })

  const qwer = await prisma.todo.create({
    data: {text: 'qwer'}
  })
  
  console.log({ asdf, zxcv, qwer })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })