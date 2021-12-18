const util = require('../../utils/util')
const teamModel = require('../../models/team')

module.exports = async (req, res) => {
    try {
        const result = await teamModel.find({})
        console.log(result)
        if (!result[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {
                team: result
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}