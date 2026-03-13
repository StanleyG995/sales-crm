import type { DeleteConfirmProps } from "../DeleteConfirm/DeleteConfirm.types"

const DeleteConfirm = ({ company, onCancel, onConfirm }: DeleteConfirmProps) => {
    return (
      <>
        <h2>Potwierdź usunięcie</h2>
        <p>Czy na pewno chcesz usunąć {company.companyName}?</p>
        <button onClick={onCancel}>Anuluj</button>
        <button onClick={onConfirm}>Usuń</button>
      </>
    );
}

export default DeleteConfirm
