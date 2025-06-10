interface ModalProps {
  ref?: React.RefObject<HTMLDialogElement | null>;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Modal = ({ ref, onConfirm, onCancel }: ModalProps) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Confirmation</h3>
        <p>Are you sure you want to delete this image?</p>
        <div className="modal-action">
          <button className="border-none shadow-none btn btn-soft" onClick={onCancel}>
            Cancel
          </button>
          <button className="border-none shadow-none btn btn-soft btn-error" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  );
};

export default Modal;
