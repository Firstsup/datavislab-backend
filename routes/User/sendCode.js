const util = require('../../utils/util')
const nodemailer = require('nodemailer')

const mailTransport = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
        user: 'datavislab@163.com',
        pass: 'XJPSZRYXBSJYPLED'
    }
})

const randomFns = () => {
    let code = ""
    for (let i = 0; i < 6; i++) {
        code += parseInt(Math.random() * 10)
    }
    return code
}

module.exports = async (req, res) => {
    const data = req.body.user
    const code = randomFns()
    const options = {
        from: `"大数据可视分析实验室" <datavislab@163.com>`,
        to: `"${data.username}" <${data.email}>`,
        subject: '大数据可视分析实验室-验证',
        text: '大数据可视分析实验室-验证',
        html: `<h2>${data.username}，您好！</h2><p>您的验证码是：${code}</p><br/><p>大数据可视分析实验室</p>`,
        attachment: []
    }
    mailTransport.sendMail(options, function (err, msg) {
        if (err) {
            console.log(err);
            util.responseClient(res, 500, 1, '邮件发送失败', {})
        } else {
            util.responseClient(res, 200, 0, '成功', {code: code})
        }
    });
}