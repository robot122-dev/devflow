export const sendContactForm = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Форма успешно отправлена',
        data
      });
    }, 1500);
  });
};