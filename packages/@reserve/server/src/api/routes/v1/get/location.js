import knex from 'knex'
import { config } from '@reserve/utils'
import { Names, Client } from '@reserve/database'

const path = config.server.api.routes.v1.get.card
const { options } = config.server.handler

// TODO: fix and refactor
async function handler(res, h) {
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

export default {
    method: 'POST',
    path,
    options,
    handler
}
