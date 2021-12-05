import { Names } from '../schema'
const tableName = Names.places_reviews

export function up(knex) {
    return knex.schema.createTable(tableName,
        (tx) => {
            tx.increments('id').primary().notNullable().unique()
            tx.uuid('place_id')
            tx.integer('mark', 5).unsigned().notNullable()
            tx.text('comment').notNullable()

            tx.foreign('place_id').references('id')
                .inTable(Names.places_details)
        }
        
    )
}

export function down(knex) {
    return knex.schema.dropTableIfExists(tableName)
}
