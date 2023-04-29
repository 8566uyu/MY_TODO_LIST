import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import TodoHead from './components/TodoHead';
import './styles/App.css'
import styled from 'styled-components'
import axios from 'axios'

// import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log('mount 완료');
    const getTodos = async () => {
      const res = await axios.get('http://localhost:8000/api/todos');
      console.log(res);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // Todo 추가하는 함수
  const addItem = async (newItem) => {
    // newItem => { title: 'xxx' }
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // // newItem => { title: 'xxx', id: n, done: false }
    //
    // setTodoItems([...todoItems, newItem]);

    // axios 요청보내기
    const res = await axios.post('http://localhost:8000/api/todo', newItem);
    console.log(res.data);
    setTodoItems([...todoItems, res.data]);
  };

  // Todo 삭제하는 함수
  const deleteItem = async (targetItem) => {
    // targetItem => { title: 'xxx', id: n, done: false }
    // 1. filter()
    // : targetItem의 id 와 todoItems state의 id가 같지 않은 애들을 새로운 배열로 반환
    // const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // // 2. state 변경
    // setTodoItems(newTodoItems);

    // axios delete 요청 보내기
    await axios.delete(`http://localhost:8000/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  // todo 수정하는 함수
  // (1) 서버 API 를 이용해 디비 데이터 업데이트
  // (2) 변경한 내용을 화면에 다시 출력
const updateItem = async (targetItem) => {
  console.log(targetItem);
  await axios.patch(`http://localhost:8000/api/todo/${targetItem.id}`, targetItem);
  // const newTodoItems = todoItems.map((item) => {
  //   if (item.id === targetItem.id) {
  //     return targetItem;
  //   }
  //   return item;
  // }

  // setTodoItems(newTodoItems);

}

  return (
      <div className="App">

        <TodoHead />

        {/* todo 추가 input */}
        <AddTodo addItem={addItem} />



        {/* todo 목록 보이기 */}
        {todoItems.length > 0 ? (
            todoItems.map((item) => {
              return <Todo key={item.id}
                           item={item}
                           deleteItem={deleteItem}
                           updateItem={updateItem} />;
            })
        ) : (
            <Todoplus className="empty-todos">✅ Todo 추가하쎄옹 ✅</Todoplus>
        )}

        {/* 미션: 현재 투두 목록 개수 보이기 */}

        <Count>Totle : Todo List ({todoItems.length}) </Count>




      </div>
  );
}

export default App;

const Count = styled.div`
  font-size: 1.8rem;
  color: #68a67d;
  margin-top: 2rem;
`;

const Todoplus = styled.p`
  font-size: 1.8rem;
  color: #24613b;
  text-align: center;
`;
