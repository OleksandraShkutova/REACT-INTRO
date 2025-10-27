
/*
// el = document.createElement(type)
// el.textContent = 'content'
// el.title = ''

// React.createReactElement(type, attrs, content)

// JSX - спец. синтаксис (синт. цукор)
// <type atrrs>content</type> 

// Babel: jsx => js

//1. доступ до улумента розмітки div з id='root'
//const root = ReactDOM.createRoot(document.getElementById('root'));

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
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App(){
  const user = {
    firstName: 'Vika',
    lastName: 'Lyn',
    location: {
      country: 'Ukraine',
      city: 'Kyiv',
    },
    photo: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
    statistic: {
      tweets: 1337,
      following: 561,
      followers: 718,
    },
    isMale: 'false',
  };
  
  return(
    <>
      <UserCard userInfo = {user}/>
    </>
  ); 
};

function UserCard(props){
  const {firstName, lastName, location, photo, statistic, isMale } = props.userInfo;
  const styleCard = {
    boxShadow: isMale === 'true' ? '0 0 10px blue' : '0 0 10px red',
  };
  return (
    <article className = "userCard">
      <img style={styleCard} src={photo} alt={firstName}/>
      <div>
        <h2>{firstName} {lastName}</h2>
        <h3>{location.country}, {location.city}</h3>
      </div>
      <button>
        <i className="fa-solid fa-heart"></i>
      </button>
      <div className='statistic'>
        <span>
          <p>Tweets</p>
          <p>{statistic.tweets}</p>
        </span>
        <span>
          <p>Folloving</p>
          <p>{statistic.following}</p>
        </span>
        <span>
          <p>Followers</p>
          <p>{statistic.followers}</p>
        </span>
      </div>
    </article>
  )
}

