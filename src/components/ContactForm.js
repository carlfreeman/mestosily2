// components/ContactForm.js
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ 
    type: '',  // 'success' или 'error'
    text: ''   // Текст сообщения
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Ошибка при отправке. Пожалуйста, попробуйте еще раз.'
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Произошла ошибка сети. Пожалуйста, проверьте соединение.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-to-r from-primary to-dark">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-ctetb text-4xl text-center text-accent">Обратная связь</h2>
        
        <form onSubmit={handleSubmit} className="bg-transparent p-6 md:p-8">
          <div className="mb-6">
            <input
              placeholder="Имя *"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent bg-white"
              required
            />
          </div>
          
          <div className="mb-6">
            <input
              placeholder="Телефон *"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
              required
            />
          </div>
          
          <div className="mb-8">
            <textarea
              id="message"
              name="message"
              placeholder="Комментарий"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="resize-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
            ></textarea>
          </div>
          <div className="w-full justify-items-center">
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-50 bg-accent text-black py-3 px-8 rounded-lg font-ctetb text-lg transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-dark hover:text-white hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Отправка...' : 'ОТПРАВИТЬ'}
              </button>
            </div>
          </div>
          {submitMessage.text && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitMessage.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}