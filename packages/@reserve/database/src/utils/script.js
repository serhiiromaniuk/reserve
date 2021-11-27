import { exec } from 'child_process'
import { config } from '@reserve/utils'

const args = process.argv.slice(2).join(' ')
exec(
`
echo "=> Local database operations." \
&& echo "=> Passed args: ${args}" \
&& docker-compose -f ${__dirname.replace('dist', 'src')}/local.database.yaml ${args} \
&& echo "=> Script done."
`,  {
        env: {
            PATH: process.env.PATH,
            DATABASE_PORT: config.db.port,
            DATABASE_USER: config.db.user,
            DATABASE_PASSWORD: config.db.password,
            DATABASE_NAME: config.db.database
        }
    }, (error, stdout, stderr) => {
        if (error) {
            console.error(error.message)
            return
        }
        if (stderr) {
            console.error(stderr)
            return
        }
        console.log(stdout);
    }
)
