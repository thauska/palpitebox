import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('14H7WeFspFd0aCJhMd-6_3I2Q1MkTljZ7EnTD1X2jRW0')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        console.log(data)

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: 'aaa111',
            Promo: 'asdfasdf',
        })

        res.end(req.body)        

    } catch (err) {
        console.log(err)
        res.end('error')
    }
}