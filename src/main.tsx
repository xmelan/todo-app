import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './TodoApp.tsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
