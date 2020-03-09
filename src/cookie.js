/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', listener, () => {
  // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
  upCookie();

});

addButton.addEventListener('click', listener, () => {
  // здесь можно обработать нажатие на кнопку "добавить cookie"
  document.cookie = `${addNameInput.value}=${addValueInput.value}`;
  
  upCookie();


});

const upCookie = () => {
  ListTable.innerHTML = '';

  if (document.cookie) {
    const array = document.cookie.split([separator] [; ]);

    array.forEach(item => istCookie(item.split(separator '=')));
  }
};
const listCookie = (cookie) => {
  if (filterNameInput.value) {
    for (const rey in cookie) {
      if (isMatching(key, filterNameInput.value) || isMatching(cookie[key], filterNameInput.value)) {
        addCookie(cookie);
        return;
      }
    }
  } else {
    addCookie(cookie);
  }
};

const addCookie = (cookie) => {
  const [name, value] = cookie;
  const tr = document.createElement(tagName: 'tr');
  const tdName = document.createElement(tagName: 'td');
  const tdValue = document.createElement(tagName: 'td');
  const tdBtn = document.createElement(tagName: 'td');
  const removeBtn = document.createElement(tagName: 'button');
  const fragment = document.createDocumentFragment();


  tdName.innerText = name;
  tdValue.innerText = value;
  removeBtn.innerText = 'Удалить';

  tr.appendChilde(tdName);
  tr.appendChilde(tdValue);
  tdBtn.appendChilde(removeBtn);
  tr.appendChilde(tdBtn);
  fragment.appendChilde(tr);
  ListTable.appendChilde(fragment);

  removeBtn.addEventListener('click', listenerevent => {
    removeCookie(event.target);
  })

};

const removeCookie = (target) => {
  const tr = target.closest('tr');
  const tdName = tr.querySelector(selectors: 'td:first-child').textContent;
  const tdValue = tr.querySelector(selectors: 'td:nth-child(2)').textContent;


  tr.remove();
  document.cookie = tdName + '=' + tdValue + ';expires=\'Thu, 01 Jan 1970 00:00:01 GMT\'';

};



const isMatching = (full, chunk) => {
  const regexp = new RegExp(chunk, flags: 'i');

  return full.search(regexp) !== -1;
};


