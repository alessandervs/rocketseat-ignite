import { Container } from "./style";
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
  const { transactions } = useTransactions()


  const summary = transactions.reduce((acc, transactions) => {

    if (transactions.type === 'deposit') {
      acc.entradas += transactions.value
      acc.total += transactions.value
    } else {
      acc.saidas += transactions.value
      acc.total -= transactions.value
    }
    return acc;
  }, {
    entradas: 0,
    saidas: 0,
    total: 0
  })


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.entradas)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.saidas)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}