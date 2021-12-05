import fs from 'fs'
import AWS from 'aws-sdk'
require('../../config')

export function S3Handler(filePath, ownerId) {
    var fileContent
    try {
        fileContent = fs.readFileSync(filePath)
    } catch (err) {
        return {
            ok: false,
            message: err
        }
    }
    const fileName = (new Date()).toISOString().split('.')[0] + '_' + ownerId
    const params = {
        Bucket: process.env.BUCKET_NAME || 'sample-bucket-here',
        Key: 'uploads/' + fileName,
        Body: fileContent
    }
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })

    let location = ''
    const a = s3.upload(params, function (err, data) {
        if (err) {
            return {
                ok: false,
                message: err
            }
        }
        location = data.location // S3 Issue
        return data.Location
    })
    return {
        ok: true,
        name: fileName,
        location: 'http://sample-bucket-here.s3.amazonaws.com/upload/' + fileName
    }
}
