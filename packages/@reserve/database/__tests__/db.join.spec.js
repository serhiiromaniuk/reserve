import knex from 'knex'
import uuid from 'uuid'
import { InsertData, DeleteData, Names, Client } from '../src'

describe('test', () => {
	const locData = {
		address: 'Test Address' + uuid.v4(),
		city: 'Test City' + uuid.v4()
	}
	const plcData = {
		id: uuid.v4(),
		title: uuid.v4(),
		imgUrl: uuid.v4(),
		description: uuid.v4(),
	}

    it('should insert data (places_locations) and insert data (places_details)', async () => {
		const tx = Client()

		const getLoc = await tx.insert(locData).into(Names.places_locations).timeout(4000, {cancel: true})
		const q = tx.insert({
			...plcData,
			location_id: getLoc[0]
		}).into(Names.places_details).timeout(4000, {cancel: true})

		await tx.destroy()
        expect(!!q).toEqual(true)
	})

	it('should select and join data', async () => {
		const tx = Client()
		const tbl = Names.places_details
		const tgtTbl = Names.places_locations

		const q = await tx
			.select('*')
			.from(tbl)
			.where(tbl + '.id', plcData.id)
			.leftJoin(
				tgtTbl,
				'location_id',
				tgtTbl + '.id'
			)
			.timeout(4000, { cancel: true })

		await tx.destroy()
        expect(!!q).toEqual(true)
    })

    it('should delete data (places_details)', async () => {
        const q = await DeleteData(Names.places_details, plcData)
        expect(q.ok).toEqual(true)
    })

    it('should delete data (places_locations)', async () => {
        const q = await DeleteData(Names.places_locations, locData)
        expect(q.ok).toEqual(true)
    })
})
