import React, { Component, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'


const loading = (
  <div className="pt-3 text-center text-info">
    <div className="sk-spinner sk-spinner-pulse text-info"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
import { publicRoutes } from './routes';

class App extends Component {
  
  render() {
    
    return (
      
        <Suspense fallback={loading}>
          <Routes>
            {/* Public Layout Load With Routes  */}
            {publicRoutes.map((route, idx) => (
                  <Route exact path={route.path} name={route.name} element={<route.element/>} key={idx} />
            ))}

            {/* Private Layout Load */}
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      
    )
  }
}

export default App
