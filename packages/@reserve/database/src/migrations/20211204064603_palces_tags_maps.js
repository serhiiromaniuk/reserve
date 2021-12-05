import { Names } from '../schema'
const tableName = Names.places_tags_maps

export function up(knex) {
    return knex.schema.createTable(tableName,
        (tx) => {
            tx.uuid('place_id')
            tx.integer('tag_id').unsigned().notNullable()

            tx.foreign('place_id').references('id')
                .inTable(Names.places_details)
            tx.foreign('tag_id').references('id')
                .inTable(Names.places_tags_lists)
        }
        
    )
}

export function down(knex) {
    return knex.schema.dropTableIfExists(tableName)
}
