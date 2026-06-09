import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Введите минимум 2 символа'),

  email: z
    .email('Введите корректный email'),

  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
});