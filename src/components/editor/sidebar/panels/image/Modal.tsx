import { Button } from '@/components/common';

interface ModalProps {
  ref: React.RefObject<HTMLDialogElement | null>;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <dialog className="modal" ref={props.ref}>
      <div className="modal-box">
        <h3 className="text-lg font-bold">Confirmation</h3>
        <p>Are you sure want to delete this image?</p>
        <div className="modal-action">
          <Button className="btn btn-soft" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button className="btn btn-soft btn-error" onClick={props.onConfirm}>
            Delete
          </Button>
        </div>
      </div>
      <form className="modal-backdrop" method="dialog">
        <Button />
      </form>
    </dialog>
  );
};

export default Modal;
