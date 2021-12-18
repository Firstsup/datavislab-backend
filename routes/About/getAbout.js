const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    try {
        const phone = await aboutModel.find({
            item: 'phone'
        })
        const email = await aboutModel.find({
            item: 'email'
        })
        const address = await aboutModel.find({
            item: 'address'
        })
        const invitation = await aboutModel.find({
            item: 'invitation'
        })
        if (!phone[0] || !email[0] || !address[0] || !invitation[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {
                phone: phone[0].content,
                email: email[0].content,
                address: address[0].content,
                invitation: invitation[0].content
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}