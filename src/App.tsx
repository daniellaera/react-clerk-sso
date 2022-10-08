import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/WelcomePage';
import ExpensesLayout from './pages/ExpensesLayout';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path='/' element={<WelcomePage />}/>
            <Route path='/expenses' element={<ExpensesLayout />}>
              <Route index element={<Expenses />}/>
            </Route>
            <Route path='/invoices' element={<Invoices />}/>
            <Route path='/profile' element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }/>
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
