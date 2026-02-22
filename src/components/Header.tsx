import { useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

const Header = () => {

    const context = useContext(CompaniesContext)
	if (!context) return null
	const { toggleModalVisibility } = context

    return (
        <header className = 'app-header'>
            <button className='button button--primary' onClick = {toggleModalVisibility}>
                Add company
            </button>
        </header>
    )
}

export default Header