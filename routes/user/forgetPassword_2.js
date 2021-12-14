let util = require('../../utils/util')
let userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.query
    try {
        await userModel.updateOne({
            email: data.email
        }, {
            password: data.password
        }, null, (e, r) => {
            if (e) {
                util.responseClient(res, 500, 1, '数据库存储失败', {})
            } else {
                util.responseClient(res, 200, 0, '成功', data)
            }
        })
    } catch (e) {
    }
}