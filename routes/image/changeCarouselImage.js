const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await aboutModel.updateOne({
            item: 'carouselImage' + data.carouselImageID
        }, {
            content: data.imageUrl
        })
        if (result) {
            util.responseClient(res, 200, 0, '成功', data)
        } else {
            util.responseClient(res, 500, 1, '数据库存储失败', {})
            console.log('e:', '数据存储失败')
        }
    } catch (e) {
        console.log('e:', e)
    }
}