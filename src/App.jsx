import dashboard from './images/illustration-dashboard.png'
import logo from './images/logo.svg'

import Email from './components/email'
import Social from './components/social'

function App() {
  return (
    <main className='grid place-items-center my-10'>
      <img src={logo} alt="logo" className='mb-8'/>
      
      <h1 className='font-thin text-4xl text-gray-400 mb-4'>We are launching <span className='font-bold text-black'>soon!</span></h1>
      <h3 className='text-2sm mb-10 text-gray-700'>Subscribed and get notified</h3>

      <Email />

      <img src={dashboard} alt="dashboard" className='max-w-3xl mb-16'/>

      <Social />

      <span className="text-gray-400">
        &copy; Copyrigth Ping. All rigths reserved
      </span>

    </main>
  )
}

export default App
