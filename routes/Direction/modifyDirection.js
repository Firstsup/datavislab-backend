const util = require('../../utils/util')
const directionModel = require('../../models/direction')

module.exports = async (req, res) => {
    const data = req.body.direction
    try {
        const result = await directionModel.updateOne({
            id: data.id
        },{
            name: data.name,
            introduction: data.introduction,
            cover: data.cover
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