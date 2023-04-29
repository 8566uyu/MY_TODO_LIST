import { useState } from 'react';
import styled from 'styled-components'

// import './AddTodo.scss';





const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    // 빈값은 추가 안되게
    if (todoItem.title === '') return;
    //1. props addItem 함수
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({ title: '' });
  }

  const onEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
   onButtonClick();
    }
  }

  return (
      <div className="AddTodo">
        <InputBox
            type="text"
            placeholder=" Add your new Todo"
            value={todoItem.title}
            onChange={(e) => setTodoItem({ title: e.target.value })}
            onKeyDown={onEnterKeyDown}
        />
        <Button onClick={onButtonClick}>+</Button>
      </div>
  );
};

export default AddTodo;

const InputBox = styled.input`
  border: 3px solid  #8FBF9F;
  //width: 42rem;
  width: 30rem;
  height: 4rem;
  color: #68a67d;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

const Button = styled.button`
    background-color: transparent;
  border:none;
  height: 3rem;
  width: 3rem;
  margin-left: 2rem;
  font-size: 3rem;
  color: #68a67d;
  
    `;
