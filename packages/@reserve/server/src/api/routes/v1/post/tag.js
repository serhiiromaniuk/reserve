import { config } from '@reserve/utils'
import { InsertData, Names } from '@reserve/database'
const { server } = config

export default {
    method: 'POST',
    path: server.api.routes.v1.post.tag,
    handler: async (req, h) => {
        try {
            const { payload } = req
            const q = await InsertData(Names.places_tags_lists, payload)
            if (!q.ok) throw new Error(q.message)
            return {
                ok: true,
                res: q.message
            }
        } catch (err) {
            console.error(err)
            return {
                ok: false,
                res: err
            }
        }
    }
}
