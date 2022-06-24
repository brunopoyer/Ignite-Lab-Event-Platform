import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>        
      </ApolloProvider>      
    </div>
  )
}

export default App
