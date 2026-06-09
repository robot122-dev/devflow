import ReactModal from 'react-modal';
import { CircleCheckBig } from 'lucide-react';

ReactModal.setAppElement('#root');

function Modal({
  isOpen,
  onClose
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <CircleCheckBig
        size={64}
        className="modal-icon"
      />

      <h3>
        Сообщение отправлено
      </h3>

      <p>
        Спасибо за обращение.
        Мы получили вашу заявку и скоро
        свяжемся с вами.
      </p>

      <button
        className="btn btn--md btn--primary"
        onClick={onClose}
      >
        Отлично
      </button>
    </ReactModal>
  );
}

export default Modal;