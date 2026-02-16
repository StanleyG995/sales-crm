import { createContext } from 'react'
import type { FormContextType } from '../types/FormContextType'

export const FormContext = createContext<FormContextType | null>(null)
