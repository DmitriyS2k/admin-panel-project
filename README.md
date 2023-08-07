Technical Assignment


Технології:
React - основний фреймворк
MOBX - state менеджмент 
Axios - HTTP клієнт для запитів
Formik or RHF - Ліба для роботи з формами
Yup - Ліба для валідації форм 
UI lib(Material/Ant D) - Набір UI елементів
Json-server - Fake API для эмуляції сервера
Query params
Base64 - аватар юзера.


Функціонал:
(CRUD для сутності User)
С - Create - сторінка з формою для створення користувача + валідація.
R - Read- сторінка із списком всіх користувачів з пагінацією.
U - Update - сторінка редагування користувача(перевикористовуємо компонент/форму для Create) + валідація.
D - Delete - функціонал видалення користувача + confirm dialog.
Upload and change Avatar image (Base64)

Набір полів User:
Name
Email
Phone
Age
Gender(2)

Роутинг:
/  -  home, поки пуста
/users - таблиця юзерів з пагінацією
/users/new - сторінка з формою створення юзера
/users/{id} - сторінка редагування користувача

