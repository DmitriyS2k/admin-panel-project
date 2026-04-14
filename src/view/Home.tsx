import * as React from 'react';

function Home() {
  return (
    <div>
      <h1>Привет! Это главная страница</h1>
      <section className="main-discription">
        <h2> Функциональность</h2>

        <p>
          Реализован полный CRUD для сущности
          <strong>User</strong>
          :
        </p>

        <ul>
          <li>

            <strong>Create</strong>
            {' '}
            — создание пользователя с валидацией
          </li>
          <li>
            <strong>Read</strong>
            {' '}
            — список пользователей с пагинацией
          </li>
          <li>

            <strong>Update</strong>
            {' '}
            — редактирование пользователя
          </li>
          <li>

            <strong>Delete</strong>
            {' '}
            — удаление с подтверждением
          </li>
        </ul>

        <p>Дополнительно:</p>

        <ul>
          <li>

            <strong>Поиск пользователей</strong>
          </li>
          <li>

            <strong>Фильтрация данных</strong>
          </li>
          <li>

            <strong>Пагинация</strong>
          </li>
          <li> загрузка и изменение аватара (Base64)</li>
          <li> состояние поиска и фильтров синхронизировано с URL</li>
          <li> формы с валидацией (Formik + Yup)</li>
        </ul>
        <p>
          ⚠️ Пет-проект был разработан в 2022 году,
          поэтому некоторые используемые решения и зависимости могут быть устаревшими.
        </p>
      </section>
    </div>
  );
}

export default Home;
