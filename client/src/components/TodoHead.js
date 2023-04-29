import React from 'react';
import styled from 'styled-components';
// import { todoItems } from './App';

const TodoHeadBlock = styled.div`
  .Date {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    margin-bottom: -5px;
  }
  
  .year {
    //margin: 0;
    font-size: 1.8rem;
    color: #24613b;
  }
  .day {
    //margin-top: 4px;
    color: #24613b;
    font-size: 1.8rem;
    margin-left: 1rem;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  //border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const Titletodo = styled.div`
  color: #68a67d;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;


function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  // const todos = App();
  // const undoneTasks = todos.filter(todo => !todo.done);

  return (
      <TodoHeadBlock>

        <Titletodo>Todo List</Titletodo>
        <div className="Date">
        <div className="year">{dateString}</div>
        <div className="day">{dayName}</div>
        {/*<TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>*/}
        </div>
      </TodoHeadBlock>
  );
}

export default TodoHead;
