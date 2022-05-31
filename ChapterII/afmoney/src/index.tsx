import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';

import { App } from './App';



createServer({

  models: {
    transactions: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de website',
          type: 'deposit',
          category: 'DEV',
          value: 6000,
          createdAt: new Date('2021-02-12 09:02:01')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          value: 1100,
          createdAt: new Date('2021-03-12 19:22:01')
        },
      ]

    })

  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {

      return this.schema.all('transactions')

    })


    this.post('/transaction', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)

    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
