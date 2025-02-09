const nodemailer = require("nodemailer")

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: false,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD
            }
        })
    }

    async sendMail(email, activationLink) {
        await this.transporter.sendMail({
            from: process.env.SMPT_USER,
            to: email,
            subject: `Activation account link ${activationLink}`,
            html: `
            <div>
                <a href=${activationLink}>Click to activate Akkaunt</a>
            </div> 
            `
        })
    }
}

module.exports = new MailService()