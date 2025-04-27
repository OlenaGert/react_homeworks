import React from 'react';

function ListsComponent() {
  return (
    <div>
      <h2>Упорядоченный список</h2>
      <ol>
        <li>Пункт 1
          <ol>
            <li>Вложенный пункт 1.1</li>
          </ol>
        </li>
        <li>Пункт 2</li>
      </ol>

      <h2>Неупорядоченный список</h2>
      <ul>
        <li>Элемент A
          <ul>
            <li>Вложенный элемент A.1</li>
          </ul>
        </li>
        <li>Элемент B</li>
      </ul>
    </div>
  );
}

export default ListsComponent;