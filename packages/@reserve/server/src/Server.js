import { config } from '@reserve/utils'
import { Ping, GetCard } from './api'
import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert'

(
    async () => {
        const { host, port } = config.server

        const server = Hapi.server({ host, port})
        await server.register(Inert)

        server.route(Ping.default)
        server.route(GetCard.default)

        try {
            await server.start()
            console.log('NODE_ENV:', process.env.NODE_ENV, 'Server running on', server.info.uri)
        } catch (error) {
            console.log(error)
        }
    }
)()
