const util = require('../../utils/util')
const directionModel = require('../../models/direction')

module.exports = async (req, res) => {
    try {
        const result = await directionModel.find({})
        console.log(result)
        if (!result[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {
                directions: result
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}