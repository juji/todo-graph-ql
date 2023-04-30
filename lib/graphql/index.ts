
import query from './Query.graphql'
import mutation from './Mutation.graphql'
import cache from './Cache.graphql'

import helloResolvers from './hello/resolvers'
import helloTypeDef from './hello/typeDef.graphql'

import todoResolvers from './todo/resolvers'
import todoMutations from './todo/mutations'
import todoTypeDef from './todo/typeDef.graphql'

export const resolvers = {
    Query: {
        ...helloResolvers,
        ...todoResolvers
    },
    Mutation: {
        ...todoMutations 
    }
}

export const typeDefs = [
    query,
    mutation,
    cache,
    helloTypeDef,
    todoTypeDef
]
