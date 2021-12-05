export const config = {
    db: {
        dir: process.env.DATABASE_DIR || 'src',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 3306,
        user: process.env.DATABASE_USER || 'user',
        password: process.env.DATABASE_PASSWORD || 'password',
        database: process.env.DATABASE_NAME || 'reserve',
    },
    server: {
        host: process.env.SERVER_HOST || 'localhost',
        port: process.env.SERVER_PORT || 5000,
        api: {
            routes: {
                util: {
                    ping: '/api/util/ping'
                },
                v1: {
                    get: {
                        card: '/api/v1/get/card'
                    },
                    post: {
                        card: '/api/v1/post/card'
                    }
                }
            }
        }
    }
}
