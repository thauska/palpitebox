import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('14H7WeFspFd0aCJhMd-6_3I2Q1MkTljZ7EnTD1X2jRW0')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        console.log(data)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')

        const mostrarPromocaoCell = sheetConfig.getCell(2, 0)
        const MsgPromocaoCell = sheetConfig.getCell(2, 1)

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocaoCell.value === 'VERDADEIRO') {
            // TODO: gerar cupom
            Cupom = 'temporario'
            Promo = MsgPromocaoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: 5,
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm'),
            Cupom,
            Promo
        })

        res.end(req.body)        

    } catch (err) {
        console.log(err)
        res.end('error')
    }
}