import knex from 'knex'
import uuid from 'uuid'
import { config } from '@reserve/utils'
import { Names, Client } from '@reserve/database'

const path = config.server.api.routes.v1.set.card
const { options } = config.server.handler

async function handler(req, h) {
	const { payload } = req

	const tx = Client()
	const tblDetail = Names.places_details
	const tblLocation = Names.places_locations
	const tblTagList = Names.places_tags_lists
	const tblTagMap = Names.places_tags_maps

	try {
		const {
            location,
			detail
		} = payload

		const dataLoc = JSON.parse(location)
		const qLocation = await tx
			.insert(dataLoc)
			.into(tblLocation)
			.timeout(4000, { cancel: true })

		const dataDet = JSON.parse(detail)
		const id = uuid.v4()
		const qDetail = await tx
			.insert({
				id,
				...dataDet,
				location_id: qLocation[0]
			})
			.into(tblDetail)
			.timeout(4000, { cancel: true })

		await tx.destroy()
		return {
			ok: true,
			message: {
				location: {
					id: qLocation[0],
					...dataLoc
				},
				detail: {
					id,
					...dataDet,
					location_id: qLocation[0]
				}
			}
		}
	} catch (error) {
		const message = error?.sqlMessage || error
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
