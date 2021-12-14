let util = require('../../utils/util')
let userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.query
    try {
        await new Promise(((resolve, reject) => {
            userModel
                .find(data)
                .then(result => {
                    if (result[0]) {
                        resolve()
                    } else {
                        reject()
                    }
                })
        }))
        util.responseClient(res, 200, 0, '成功', {})
    } catch (e) {
        util.responseClient(res, 500, 2, '邮箱不存在', {})
    }
}