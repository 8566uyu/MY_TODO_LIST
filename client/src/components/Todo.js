import { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import 'focus-visible';

const Delete = styled.div`
  display: flex;
  margin-left: 2vw;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Delete} {
      display: initial;
    }
  }
`;

const CheckBox = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  //border: 1px solid #ced4da;
  //font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
 
`;



const Todo = ({ item, deleteItem, updateItem }) => {
  console.log(item); // {done: false, id: 1, title: "저녁먹기"}
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title input 을 클릭; => readOnly 를 false 로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false); // title input 이 편집이 가능한 상태
  }

  // title input 에서 enter 키 => readOnly 를 true 로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
    setReadOnly(true); //
      updateItem(todoItem); // 수정 1- text input 에서 enter 누르면 수정완료
    }
  };

  // 사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  const checkboxEventHandler = (e) => {
    // todoItem.done = !todoItem.done;
    // setTodoItem(todoItem);
    //
    // const { checked, ...rest } = todoItem;
    //
    // setTodoItem({
    //   done: e.target.checked,
    //   ...rest,
    //
    // });
    const { done , ...rest } = todoItem;
    const xxx = {
      done: e.target.checked,
      ...rest,
    }
    setTodoItem(xxx);
    updateItem(xxx); // 수정 2 - checkbox input 에서 check 여부 변경시 수정
  }



  return (
      <TodoItemBlock className="Todo">
        <CheckBox
            type="checkbox"
            id={`todo${item.id}`}
            name={`todo${item.id}`}
            value={`todo${item.id}`}
            // defaultChecked={item.done}
            onChange={checkboxEventHandler}

        />
        <input type="text" value={todoItem.title} onClick={offReadOnlyMode} onKeyDown={enterKeyEventHandler} onChange={editEventHandler} />
        <Delete onClick={onDeleteButtonClick}><MdDelete /></Delete>
      </TodoItemBlock>
  );
};

export default Todo;
