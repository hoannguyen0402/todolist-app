import React from 'react';
import Home from '../components/home/Home';
import Page from '../components/page/Page';
import TodoList from '../components/todoList/TodoList';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './appHeader/AppHeader';
import AppFooter from './appFooter/AppFooter';
import AppTest from '../components/test/AppTest';

function App() {

    return (
        <div>
            <AppHeader />
            <div style={{ height: "450px" }}>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/page' element={<Page />} />
                    <Route path='/todolist' element={<TodoList />} />
                    <Route path='/apptest' element={<AppTest />} />

                    
                    <Route path='/' element={<TodoList />} />
                </Routes>
            </div>
            <AppFooter />
        </div>
    );
}

export default App;