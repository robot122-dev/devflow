import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function PrivacyModal({
  isOpen,
  onClose
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal modal--policy"
      overlayClassName="modal-overlay"
    >
      <h2>
        Политика конфиденциальности
      </h2>

      <p>
        Настоящий сайт использует cookie-файлы
        и может обрабатывать персональные данные,
        предоставленные пользователем через формы
        обратной связи.
      </p>

      <p>
        Полученные данные используются исключительно
        для обработки обращений пользователей и
        повышения качества предоставляемых услуг.
      </p>

      <p>
        Передача персональных данных третьим лицам
        не осуществляется, за исключением случаев,
        предусмотренных законодательством.
      </p>

      <button
        className="btn btn--md btn--primary"
        onClick={onClose}
      >
        Закрыть
      </button>
    </ReactModal>
  );
}

export default PrivacyModal;