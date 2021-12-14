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
                        if (result[0].password === data.password) {
                            console.log('success')
                            resolve()
                        } else {
                            reject(2)
                        }
                    }
                })
        }))
        util.responseClient(res, 200, 0, '成功', {})
    } catch (e) {
        if (e === 1) {
            util.responseClient(res, 500, 2, '用户名不存在', {})
        } else {
            util.responseClient(res, 500, 3, '密码错误', {})
        }
    }
}