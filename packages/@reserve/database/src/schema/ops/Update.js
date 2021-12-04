import knex from 'knex'
import { KnexInit } from '../../utils'
import knexfile from '../../utils/knexfile'

export async function UpdateData(table, whereClause, data) {
    const tx = KnexInit(knexfile.development)
    try {
        const query = await tx(table).where(whereClause).update(data).timeout(4000, { cancel: true })
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
