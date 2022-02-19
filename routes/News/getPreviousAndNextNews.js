const util = require('../../utils/util')
const newsModel = require('../../models/news')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const previous = await newsModel.find({
            id: {$gt: data.id}
        }).sort({'id': 1}).limit(1)
        const next = await newsModel.find({
            id: {$lt: data.id}
        }).sort({'id': -1}).limit(1)
        if (!previous[0] && !next[0]) {
            util.responseClient(res, 500, 0, '成功', {
                previous: {
                    id: -1
                },
                next: {
                    id: -1
                }
            })
        } else if (!previous[0] && next[0]) {
            util.responseClient(res, 200, 0, '成功', {
                previous: {
                    id: -1
                },
                next: {
                    id: next[0].id,
                    title: next[0].title
                }
            })
        } else if (previous[0] && !next[0]) {
            util.responseClient(res, 200, 0, '成功', {
                previous: {
                    id: previous[0].id,
                    title: previous[0].title
                },
                next: {
                    id: -1
                }
            })
        } else {
            util.responseClient(res, 200, 0, '成功', {
                previous: {
                    id: previous[0].id,
                    title: previous[0].title
                },
                next: {
                    id: next[0].id,
                    title: next[0].title
                }
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}