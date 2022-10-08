import { useClerk, UserButton, useSession } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import classes from './MainNavigation.module.css';

function SignInButton() {
    const clerk = useClerk();

    return (
        <Button onClick={() => clerk.openSignIn({})} bg={'blue.400'}
        color={'white'} _hover={{
            bg: 'blue.500'
        }}>SignIn</Button>
    )
}

const MainNavigation = () => {
    const { session } = useSession()

    return (
        <nav>
            <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Profile
              
            </NavLink>
          </li>
          {session ? (
            <UserButton />
          ): (<SignInButton />)}
          
        </ul>
        </nav>
    )
}

export default MainNavigation