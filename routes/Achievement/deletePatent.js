const util = require('../../utils/util')
const patentModel = require('../../models/patent')

module.exports = async (req, res) => {
    const data = req.body
    try {
        const result = await patentModel.deleteOne({
            id: data.id
        })
        if (result.deletedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}