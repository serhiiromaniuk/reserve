export const config = {
    db: {
        dir: process.env.DATABASE_DIR || 'src',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 3310,
        user: process.env.DATABASE_USER || 'user',
        password: process.env.DATABASE_PASSWORD || 'password',
        database: process.env.DATABASE_NAME || 'reserve',
    }
}
