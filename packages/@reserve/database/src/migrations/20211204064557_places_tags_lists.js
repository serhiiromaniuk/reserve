import { names } from '../schema'
const tableName = names.places_tags_lists

export function up(knex) {
    return knex.schema.createTable(tableName, 
        (tx) => {
            tx.increments('id').primary().notNullable().unique()
            tx.string('name', 50).notNullable().unique()
            tx.timestamp('created_at').notNullable()
        }
    )
}

export function down(knex) {
    return knex.schema.dropTableIfExists(tableName)
}
