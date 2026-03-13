import type { DeleteConfirmProps } from "../DeleteConfirm/DeleteConfirm.types"

const DeleteConfirm = ({ company, onCancel, onConfirm }: DeleteConfirmProps) => {
    return (
      <>
        <h2>Confirm deletion</h2>
        <p>Are you sure you want to delete <b>{company.companyName}</b>?</p>
        <div className='modal-controls'>
          <button onClick={onCancel} className = 'button'>Anuluj</button>
          <button onClick={onConfirm} className = 'button button--danger'>Usuń</button>
        </div>
      </>
    );
}

export default DeleteConfirm
