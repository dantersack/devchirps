import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

// IIFE (immediately-invoked function expression)
(async () => {
    const port = process.env.ACCOUNTS_SERVICE_PORT
    
    const server = new ApolloServer({
        schema: buildFederatedSchema([{typeDefs, resolvers}])
    })

    const {url} = await server.listen({port})

    console.log(`🚀 Accounts service ready at ${url}`)
})()