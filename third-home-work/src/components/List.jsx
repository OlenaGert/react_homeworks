import React, { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);

  // Функция удаления по id
  const removePerson = (id) => {
    const updatedList = people.filter(person => person.id !== id);
    setPeople(updatedList);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список приглашённых:</h2>
      {people.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {people.map(person => (
            <li key={person.id} style={{ marginBottom: '10px' }}>
              {person.name}, {person.age} лет
              <button
                style={{ marginLeft: '10px', color: 'white', background: 'red', border: 'none', padding: '5px' }}
                onClick={() => removePerson(person.id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;