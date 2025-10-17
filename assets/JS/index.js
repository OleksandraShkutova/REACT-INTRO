

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
//
function App() {
  const name = 'Sasha';
  return (
    <>
        <Header isGreeting={true} userNameHi={name} />
        <Header isGreeting={false} userNameHi='Vika' />
        <UserInfo />
        <NewsSection />
        <Footer />
    </>
  );
};

function UserInfo () {
  const user = {
    name: 'Sasha',
    age: 21,
    imgSrc: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'
  };

  //style = {змінна}
  //змінна = {імя властивостей в camelCase backgroundColor}
  const userNameStyle = {
    color: user.age >= 18 ? 'red' : 'green',
    backgroundColor: 'beige',
  };

  return (
    <article className="userCard">
      <h2 style={userNameStyle}>{user.name}</h2>
      <img src={user.imgSrc} alt={user.name}/>
    </article>
  );
}
//передача даних від батьківського компонента App 
// до дочірнього Header пераметра userNameHi зі знвченням name
//function Header (props) тобто {userNameHi} = props
//props {userNameHi: 'Sasha'}

function Header ({userNameHi, isGreeting}){
  //const { userNameHi } = props;
  // дужки після return необхідні, бо прописано все не в одному рядку
  return (
    // class => className = "class class class" + camelCase
    <header className = "header" >
      <h1>{isGreeting ? "Hello": "Bay"}, {userNameHi}!</h1>
    </header>
  );
}

function Footer () {
  return (
    <footer>
      <p>About company</p>
      <p>Contact</p>
    </footer>
  );
}

function NewsSection (){
  const news = {
      title: 'some news',
      body: 'Something happend',
      isGood: true,
  };

  const newsStyle = {
    backgroundColor: news.isGood ? 'green' : 'red'
  };

  return (
    <article className="userCard">
      <h2 style={newsStyle}>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
};