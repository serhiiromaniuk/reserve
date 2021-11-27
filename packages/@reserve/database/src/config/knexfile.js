import config from 'config'

console.log(config)
// process.env.DATABASE_DIR = process.env.DATABASE_DIR || 'src'

// if (process.env.DATABASE_HOST) {
//     module.exports = {
//         development: {
//             migrations: {
//                 tableName: 'migr_locks',
//                 directory: `${__dirname}/${process.env.DATABASE_DIR}/database/migrations`
//             },
//             seeds: {
//                 tableName: 'seed_locks',
//                 directory: `${__dirname}/${process.env.DATABASE_DIR}/database/seeders`
//             },
    
//             client: 'mysql',
//             connection: {
//                 host: process.env.DATABASE_HOST,
//                 user: process.env.DATABASE_USER,
//                 password: process.env.DATABASE_PASSWORD,

//                 database: process.env.DATABASE_NAME,
//                 charset: 'utf8'  
//             },
//             debug: true,
//             acquireConnectionTimeout: 10000
//         }
//     }
// }
