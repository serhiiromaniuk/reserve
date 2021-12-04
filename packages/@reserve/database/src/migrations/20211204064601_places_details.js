import { names } from'../schema'
const tableName = names.places_details

export function up(knex) {
    return knex.schema.createTable(tableName, 
        (tx) => {
            tx.uuid('id').primary().notNullable().unique()
            tx.string('title', 50).notNullable().unique()
            tx.text('description', 'longtext').notNullable()
            tx.integer('location_id').unsigned().notNullable()
            tx.timestamp('created_at').notNullable()

            tx.foreign('location_id').references('id')
                .inTable(names.places_locations)
        }
    )
}

export function down(knex) {
    return knex.schema.dropTableIfExists(tableName)
}
