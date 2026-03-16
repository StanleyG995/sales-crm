import type { DeleteConfirmProps } from "../DeleteConfirm/DeleteConfirm.types"

const DeleteConfirm = <T,>({ item, onCancel, onConfirm, message }: DeleteConfirmProps<T>) => {
    return (
      <>
        <h2>Confirm deletion</h2>
        <p>{message}</p>
        <div className='modal-controls'>
          <button onClick={onCancel} className = 'button'>Anuluj</button>
          <button onClick={onConfirm} className = 'button button--danger'>Usuń</button>
        </div>
      </>
    );
}

export default DeleteConfirm
