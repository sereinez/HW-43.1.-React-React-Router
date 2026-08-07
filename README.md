# React Router: Home / About / Contact



## Короткий опис проекту

Три сторінки з навігацією без перезавантаження браузера:
- **`/`** — Home ("Це домашня сторінка")
- **`/about`** — About ("Це сторінка про нас")
- **`/contact`** — Contact ("Це контактна сторінка")

Активне посилання в меню виділяється стилем (клас `active` через `NavLink`).

**Додатково (`App.dynamic.jsx`):** альтернативна реалізація через сучасний об'єктний
підхід — `createBrowserRouter` + `RouterProvider`, з динамічним створенням маршрутів
та посилань на основі масиву об'єктів `routes`.

## Структура проєкту

```
my-react-router-app/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # BrowserRouter + Routes + Route
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── package-lock.json
```

## Встановлення та запуск

```bash
npm install
npm install react-router
npm run dev
```

Відкрити посилання з терміналу, зазвичай `http://localhost:5173/`.


## Перевірка результату

1. Натискати посилання в меню ("Головна" / "Про нас" / "Контакти") — сторінка змінюється
   **без перезавантаження браузера**, URL у адресному рядку змінюється.
2. Активне посилання виділяється кольором/рамкою.

