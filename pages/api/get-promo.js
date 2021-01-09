import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('14H7WeFspFd0aCJhMd-6_3I2Q1MkTljZ7EnTD1X2jRW0')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')

        const mostrarPromocaoCell = sheet.getCell(2, 0)
        const MsgPromocaoCell = sheet.getCell(2, 1)
        
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: MsgPromocaoCell.value
        }))

    } catch (err) {
        console.log(err)
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }

}