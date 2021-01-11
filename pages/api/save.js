import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('14H7WeFspFd0aCJhMd-6_3I2Q1MkTljZ7EnTD1X2jRW0')

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

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
            Cupom = genCupom()
            Promo = MsgPromocaoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
            Cupom,
            Promo
        })

        res.end(JSON.stringify({
            showCupom: Cupom !== '',
            Cupom,
            Promo
        }))

    } catch (err) {
        console.log(err)
        res.end('error')
    }
}