import knex from 'knex'

export function KnexInit(c) {
    return knex(c)
}
