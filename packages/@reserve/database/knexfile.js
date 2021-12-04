const { db } = require('@reserve/utils').config

module.exports = {
    development: {
        migrations: {
            tableName: 'migr_locks',
            directory: `${__dirname}/${db.dir}/migrations`
        },
        seeds: {
            tableName: 'seed_locks',
            directory: `${__dirname}/${db.dir}/seeders`
        },

        client: 'mysql',
        connection: {
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.database,
            charset: 'utf8'  
        },
        debug: true,
        acquireConnectionTimeout: 10000
    }
}
