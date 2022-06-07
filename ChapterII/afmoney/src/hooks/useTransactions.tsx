import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { contextType } from 'react-modal';
import { api } from '../services/api'


interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  value: number,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextProps {
  children: ReactNode
}


interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}


export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)


export function TransactionsProvider({ children }: TransactionsContextProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))

  }, [])


  async function createTransaction(transactionInput: TransactionInput) {


    const response = await api.post('transaction', {
      ...transactionInput,
      createdAt: new Date(),

    })


    const newTransactions = response.data.transactions;

    setTransactions([
      ...transactions,
      newTransactions,
    ])

  }



  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>

      {children}

    </TransactionsContext.Provider>

  )

}

export function useTransactions() {
  const context = useContext(TransactionsContext)


  return context;
}