const util = require('../../utils/util')
const patentModel = require('../../models/patent')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await patentModel.updateOne({
            id: data.id
        },{
            number: data.number,
            title: data.title,
            date: data.date
        })
        if (result.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}