import knex from 'knex'
import { KnexInit } from '../../utils'
import knexfile from '../../utils/knexfile'

export async function FindData(table, data = '*', lim = 3) {
    const tx = KnexInit(knexfile.development)
    try {
        const query = await tx.select(data).from(table).limit(lim).timeout(4000, { cancel: true })
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
