const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text');
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

transporter.use('compile', htmlToText.htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `MrDonalds <${email}>`,
        to: data.email,
        subject: 'Поступил заказ с сайта MrDonalds',
        html: `
            <div>
                <h2>Здравствуйте, ${data.name}</h2>
                <ul>
                    ${data.order.map((item, i) => {
                        return `<li>
                            <div>
                                <p>${item.name}(${item.choice !== undefined ? item.choice : ''}) - ${item.count}шт.</p>
                                ${Array.isArray(item.topping) ? `<p>Добавки: ${Array.isArray(item.topping) ? item.topping.join(', ') : "Нет"}</p>` : ''}
                            </div>
                        </li>`
                    })}
                </ul>
                <span>Итоговая цена: ${data.totalPrice}руб</span>
            </div>
        `
    }

    transporter.sendMail(options);
};

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));
