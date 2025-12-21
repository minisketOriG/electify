
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/global.css'
import App from '@/sitepages/App'

import { Provider } from 'react-redux'
import store from '@/store/DataStore'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
