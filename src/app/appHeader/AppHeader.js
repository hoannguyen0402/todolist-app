import React from 'react';

function AppHeader(props) {
    const goto = (url) => {
        // window.location.href = `/${url}`;
        window.location.replace(`/${url}`);
    }
    return (
        <div>
            <button onClick={() => goto("home")}>home</button>
            <button onClick={() => goto("page")}>page</button>
            <button onClick={() => goto("todolist")}>todoList</button>
            <button onClick={() => goto("apptest")}>appTest</button>
        </div>
    );
}

export default AppHeader;