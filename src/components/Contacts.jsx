import { useState } from 'react';

import Modal from './Modal';

import {
  sendContactForm
} from '../utils/contactService.js';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { contactSchema } from '../schemas/contactSchema';

import {
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@devflow.ru'
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (999) 123-45-67'
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'г. Нижний Новгород, ул. Выдуманная, 67'
  }
];



function Contacts() {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      const response = await sendContactForm(data);

      console.log(response);

      reset();

      setModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="contacts" id="contacts">

        <div className="contacts-pattern contacts-pattern--1">
          {'{} <> [] () => const let var function return React JSX'}
        </div>

        <div className="contacts-pattern contacts-pattern--2">
          {'HTML CSS JS API JSON npm vite react hook useState useEffect'}
        </div>

        <div className="contacts-pattern contacts-pattern--3">
          {'&& || === !== ++ -- async await fetch promise'}
        </div>

        <div className="container">

          <div className="contacts__header">
            <h2>Свяжитесь с нами</h2>

            <p>
              Есть вопросы или хотите сотрудничать?
              Напишите нам!
            </p>
          </div>

          <div className="contacts__wrapper">

            <div className="contacts__info">
              {contacts.map(({ icon: Icon, title, value }) => (
                <div
                  className="contact-card"
                  key={title}
                >
                  <div className="contact-card__icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  {...register('name')}
                />

                {errors.name && (
                  <span className="error">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                />

                {errors.email && (
                  <span className="error">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Сообщение"
                  {...register('message')}
                />

                {errors.message && (
                  <span className="error">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn--md btn--light"
              >
                {
                  isSubmitting
                    ? 'Отправка...'
                    : 'Отправить сообщение'
                }
              </button>
            </form>

          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default Contacts;