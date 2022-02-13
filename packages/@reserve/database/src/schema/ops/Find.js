import knex from 'knex'
import { KnexInit } from '../../utils'
import knexfile from '../../utils/knexfile'

export async function FindData(table, data = '*', lim = 3, whereClause = {}, joinParams = null) {
    const tx = KnexInit(knexfile.development)
    try {
		let query
		if (joinParams) {
			query = await tx
				.select(data)
				.from(table)
				.leftJoin(joinParams[0])
				.leftJoin(joinParams[1])
				.where(whereClause).timeout(4000, { cancel: true })
				.limit(lim)
		} else {
			query = await tx
				.select(data)
				.from(table)
				.where(whereClause).timeout(4000, { cancel: true })
				.limit(lim)
		}
		await tx.destroy()
        return {
            ok: true,
            message: query
        }
    } catch (error) {
        await tx.destroy()
        if (error.code === 'ER_DUP_ENTRY') return {
            ok: false,
            message: error.sqlMessage
        }
        return {
            ok: false,
            message: error
        }
    }
}
