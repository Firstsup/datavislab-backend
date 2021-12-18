const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const phone = await aboutModel.updateOne({
            item: 'phone'
        }, {
            content: data.phone
        })
        const email = await aboutModel.updateOne({
            item: 'email'
        }, {
            content: data.email
        })
        const address = await aboutModel.updateOne({
            item: 'address'
        }, {
            content: data.address
        })
        const add = await aboutModel.updateOne({
            item: 'add'
        }, {
            content: data.add
        })
        const invitation = await aboutModel.updateOne({
            item: 'invitation'
        }, {
            content: data.invitation
        })
        if (phone.matchedCount === 0 || email.matchedCount === 0 || address.matchedCount === 0 || add.matchedCount === 0 || invitation.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}