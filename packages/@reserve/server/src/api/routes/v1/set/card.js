import { config } from '@reserve/utils'
import { InsertData, Names } from '@reserve/database'
const { server } = config

export default {
    method: 'POST',
    path: server.api.routes.v1.set.card,
    handler: async (req, h) => {
        try {
            const { payload } = req

            Names.places_tags_lists, {
                name: 'insertingData'
            }

            const q = await InsertData(Names.places_details, payload)
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
