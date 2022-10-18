
import { useEffect, useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [data, setData] = useState([{ id: 1, title: "reactjs" }, { id: 2, title: "huy" }, { id: 3, title: "hoan" }]);
  const [newData, setNewData] = useState("");



  const addData = () => {
    const list = [...data, { id: newData, title: newData }]
    setData(list)
    setNewData('')
    console.log(list)
  };

  // const getData = (e) => {

  const searchList = () => {
    const list = data.filter(el => el.title.includes(newData))
    setData(list);
    // console.log(title);
  }

  const deleteData = (item) => {
    const newList = data.filter(el => el.id !== item.id)
    setData(newList)
  };


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input value={newData} onChange={(e) => setNewData(e.target.value)}></input>
        <button className='add' onClick={() => addData()}>ADD</button>
        {/* <button onClick={() => searchList()}>search</button> */}
      </div>
      {data.map(item => {
        return (
          <div className='container'>
            <button className='check' onClick={() => deleteData(item)}></button>
            <div className='content'>{item.title}</div>
          </div>
        )
      })}
    </div>
  );
}

export default TodoList;
