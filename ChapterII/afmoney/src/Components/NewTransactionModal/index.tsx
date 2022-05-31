import Modal from "react-modal";

import botaoFechar from "../../assets/botaoFechar.svg"
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault()

    const data = {
      id: Math.random(),
      title,
      value,
      category,
      type,
      createdAt: new Date()
    }

    api.post('/transaction', data)

  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          onClick={onRequestClose}
          className="button-modal-close"
          type="button"
        >
          <img src={botaoFechar} alt="Botão fechar"></img>
        </button>

        <Container onSubmit={handleCreateNewTransation}>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => { setType('deposit'); }}
              isActive={type === 'deposit'}
              isActiveColor='green'
            >
              <img src={entradas} alt="Entrada"></img>
              <span>Entradas</span>
            </RadioBox>


            <RadioBox
              type="button"
              onClick={() => { setType('withdraw'); }}
              isActive={type === 'withdraw'}
              isActiveColor='red'
            >
              <img src={saidas} alt="Saídas"></img>
              <span>Saídas</span>
            </RadioBox>


          </TransactionTypeContainer>


          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  )
}