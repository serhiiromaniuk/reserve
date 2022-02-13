import { config } from '@reserve/utils'
import { FindData, Names } from '@reserve/database'
const { server } = config

export default {
    method: 'POST',
    path: server.api.routes.v1.get.card,
    handler: async (req, h) => {
        try {
            const p = req
            const data = {
                id: p.id
            }
            const q = await FindData(Names.places_locations, data)
            if (!q.ok) throw new Error(q.message)

            return h.response({
                statusCode: 200,
                error: false,
                message: q.message
            })
        } catch (err) {
            console.error(err)
            return h.response({
                statusCode: 400,
                error: true,
                message: err
            }).code(400)
        }
    }
}
