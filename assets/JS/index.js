// el = document.createElement(type)
// el.textContent = 'content'
// el.title = ''

// React.createReactElement(type, attrs, content)

// JSX - спец. синтаксис (синт. цукор)
/* <type atrrs>content</type> */

// Babel: jsx => js

//1. доступ до улумента розмітки div з id='root'
const root = ReactDOM.createRoot(document.getElementById('root'));

//2. вбудовуємо за допомогою метода .render компонент App
root.render(<App />);

//3. створення компоненту App
function App() {
  return <div title="Hello">Hello React</div>;
}