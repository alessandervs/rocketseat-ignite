import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";



export function TransactionTable() {
  const { transactions } = useTransactions()

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