const util = require('../../utils/util')
const userModel = require('../../models/user')
const md5 = require("md5");

module.exports = async (req, res) => {
    const data = req.query
    try {
        let result = await userModel.find({
            username: data.username
        })
        if (!result[0]) {
            util.responseClient(res, 500, 2, '未查询到该用户', {})
            console.log('e:', '未查询到该用户')
            return
        } else {
            if (result[0].password !== md5(data.password)) {
                util.responseClient(res, 500, 3, '原密码不正确', {})
                console.log('e:', '原密码不正确')
                return
            }
        }
        result = await userModel.updateOne({
            username: data.username
        }, {
            password: md5(data.newPassword)
        })
        if (result.matchedCount === 1) {
            util.responseClient(res, 200, 0, '成功', data)
        } else {
            util.responseClient(res, 500, 1, '数据库存储失败', {})
            console.log('e:', '数据库存储失败')
        }
    } catch (e) {
        console.log('e:', e)
    }
}