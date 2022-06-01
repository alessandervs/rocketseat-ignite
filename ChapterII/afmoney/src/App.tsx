import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header/Index";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal"
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root')
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    //iniciar o nome da função que sofrerá uma ação do usuário com "handle"
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    //iniciar o nome da função que sofrerá uma ação do usuário com "handle"
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}


