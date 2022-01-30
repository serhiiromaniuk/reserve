import knex from 'knex'
import knexfile from './knexfile'

export function KnexInit(c) {
    return knex(c)
}

export function Client(conf) {
    if (conf) return KnexInit(conf)
    return KnexInit(knexfile.development)
}
