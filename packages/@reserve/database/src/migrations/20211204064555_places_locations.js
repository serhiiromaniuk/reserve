import { names } from'../schema'
const tableName = names.places_locations

export function up(knex) {
    return knex.schema.createTable(tableName, 
        (tx) => {
            tx.increments('id').primary().notNullable().unique()
            tx.string('address', 50).notNullable().unique()
            tx.string('city', 50).notNullable()
            tx.timestamp('created_at').notNullable()
        }
    )
}

export function down(knex) {
    return knex.schema.dropTableIfExists(tableName)
}
