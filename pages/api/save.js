export default async(req, res) => {
    console.log(JSON.parse(req.body))
    // JSON.parse() tranforma em objeto
    res.end(req.body)
}