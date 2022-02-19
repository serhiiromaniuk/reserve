import knex from 'knex'
import { config } from '@reserve/utils'
import { Names, Client } from '@reserve/database'

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
			.where(!!id ? {
				[tbl + '.id']: id
			} : {})
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
		const message = error.sqlMessage
		await tx.destroy()

		console.error('=>', message)
		return h.response(
			{
				ok: false,
				message
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
