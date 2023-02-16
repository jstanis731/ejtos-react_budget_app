import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Budget component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>     

                        {/* Remaining component */}   
                        <div className='col-sm'>
                            <Remaining />
                        </div>   

                        {/* ExpenseTotal component */}     
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                    </div>
                       
                    {/* ExpenseList component */}                             
                    <div className='col-lg'>
                        <ExpenseList />
                    </div>   

                    {/* AllocationForm component */}     
                    <div className='col-lg'>
                        <AllocationForm />
                    </div>   

                
            </div>
        </AppProvider>
    );
};
export default App;
