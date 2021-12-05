import { config } from '@reserve/utils'
const { db } = config

export default {
    development: {
        migrations: {
            tableName: 'migr_locks',
            directory: `${__dirname}/../../${db.dir}/migrations`
        },
        seeds: {
            tableName: 'seed_locks',
            directory: `${__dirname}/../../${db.dir}/seeders`
        },
    
        client: 'mysql',
        connection: {
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.database,
            charset: 'utf8'  
        },
        debug: process.env.DB_DEBUG || false,
        pool: {
            min: 0,
            max: 10
        },
        acquireConnectionTimeout: 10000
    }
}
