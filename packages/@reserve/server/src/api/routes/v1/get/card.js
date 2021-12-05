import { config } from '@reserve/utils'
import { FindData, Names } from '@reserve/database'
const { server } = config

export default {
    method: 'GET',
    path: server.api.routes.v1.get.card,
    handler: async (req, h) => {
        try {
            const q = await FindData(Names.places_details)
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
