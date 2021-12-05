import { config } from '@reserve/utils'
const { server } = config

export default {
    method: 'GET',
    path: server.api.routes.util.ping,
    handler: (req, h) => {
        return {
            ok: true,
            res: 'Pong!'
        }
    }
}
