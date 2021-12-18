const util = require('../../utils/util')
const userModel = require('../../models/user')
const md5 = require("md5");

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await userModel.updateOne({
            email: data.email
        }, {
            password: md5(data.password)
        })
        if (result.matchedCount === 1) {
            util.responseClient(res, 200, 0, '成功', data)
        } else {
            util.responseClient(res, 500, 1, '数据库存储失败', {})
            console.log('e:','数据库存储失败')
        }
    } catch (e) {
        console.log('e:', e)
    }
}