import fs from 'fs'

export function FileHandler(file) {
    return new Promise(
        (resolve, reject) => {
            const filename = file.hapi.filename
            const data = file._data
            const saveDir = 'upload/'
            if (!fs.existsSync(saveDir)){
                fs.mkdirSync(saveDir)
            }
            fs.writeFile(saveDir + filename, data, err => {
                if (err) {
                    reject(err)
                    return {
                        ok: false,
                        message: err
                    }
                }
                resolve({
                    ok: true,
                    filename
                })
            })
        }
    )
}
