import knex from 'knex'
import { config } from '@reserve/utils'
import { Names, Client, knexfile } from '@reserve/database'

const path = config.server.api.routes.v1.get.card
const { options } = config.server.handler

// Get card with all information
async function handler(req, h) {
	const { payload } = req

	const tx = Client()
	const tbl = Names.places_details
	const tgtTbl = Names.places_locations
	try {
		const {
			id,
			select
		} = payload

		const q = await tx
			.select(!!select ? tbl + '.' + select : '*')
			.from(tbl)
			.where(tbl + '.id', id)
			.leftJoin(
				tgtTbl,
				'location_id',
				tgtTbl + '.id'
			)
			.timeout(4000, { cancel: true })

		await tx.destroy()
		return {
			ok: true,
			message: q[0]
		}
	} catch (error) {
		await tx.destroy()
		return h.response(
			{
				ok: false,
				message: error
			}
		).code(400)
	}
}

export default {
    method: 'POST',
    path,
    options,
    handler
}
