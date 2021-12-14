let util = require('../../utils/util')
let userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.query
    try {
        await new Promise(((resolve, reject) => {
            userModel
                .find({username: data.username})
                .then(result => {
                    if (result[0]) {
                        reject(1)
                    }
                    userModel
                        .find({email: data.email})
                        .then(result => {
                            if (result[0]) {
                                reject(2)
                            } else {
                                resolve()
                            }
                        })
                })
        }))
        await userModel.create(data, ((e, r) => {
            if (e) {
                util.responseClient(res, 500, 1, '数据库存储失败', {})
            } else {
                util.responseClient(res, 200, 0, '成功', data)
            }
        }))
    } catch (e) {
        if (e === 1) {
            util.responseClient(res, 500, 2, '用户名已存在', {})
        } else {
            util.responseClient(res, 500, 3, '邮箱已被使用', {})
        }
    }
}