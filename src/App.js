import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div className="App">
      <header className="pb-3">
        <MyNav />
      </header>
      <main class="container">
        <Welcome />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
