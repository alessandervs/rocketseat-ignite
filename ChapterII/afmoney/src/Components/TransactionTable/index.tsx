import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  value: number,
  createdAt: string
}


export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))

  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(row => (
            <tr key={row.id}>
              <td>{row.title}</td>
              <td className={row.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(row.value)}
              </td>
              <td>{row.category}</td>
              <td>{
                new Intl.DateTimeFormat('pt-BR').format(
                  new Date(row.createdAt)
                )
              }</td>
            </tr>
          ))}
        </tbody>

      </table>
    </Container>
  )
}