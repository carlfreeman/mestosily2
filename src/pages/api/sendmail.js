import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;

  // Проверка данных
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  // Конфигурация SMTP для Mail.ru
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.EMAIL_USER, // Ваш email на Mail.ru
      pass: process.env.EMAIL_PASSWORD // Пароль приложения
    }
  });

  // Форматирование сообщения
  const formattedMessage = `
    <h3>Новое сообщение с сайта "Место Силы"</h3>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Сообщение:</strong></p>
    <p>${message}</p>
    <hr>
    <p>Это сообщение было отправлено с формы обратной связи.</p>
  `;

  try {
    // Отправка письма
    await transporter.sendMail({
      from: `"Форма обратной связи" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT, // Адрес получателя
      subject: 'Новое сообщение с сайта "Место Силы"',
      html: formattedMessage
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    return res.status(500).json({ error: 'Ошибка при отправке сообщения' });
  }
}