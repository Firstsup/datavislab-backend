let util = require('../../utils/util')
let userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.query
    try {
        await new Promise(((resolve, reject) => {
            userModel
                .find({
                    username: data.username
                })
                .then(result => {
                    if (!result[0]) {
                        reject(1)
                    } else {
                        if (result[0].password !== data.password) {
                            reject(2)
                        } else {
                            resolve()
                        }
                    }
                })
        }))
        userModel.updateOne({
            username: data.username
        }, {
            password: data.newPassword
        }, null, (e, r) => {
            if (e) {
                util.responseClient(res, 500, 1, '数据库存储失败', {})
            } else {
                util.responseClient(res, 200, 0, '成功', data)
            }
        })
    } catch (e) {
        if (e === 1) {
            util.responseClient(res, 500, 2, '未查询到该用户', {})
        } else {
            util.responseClient(res, 500, 3, '原密码不正确', {})
        }
    }
}