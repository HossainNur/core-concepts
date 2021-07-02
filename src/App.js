import React,{useState,useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: 'John',
  //   age: 36
  // }
  const nayoks = ['Anwar','Alomgir','Jasim'];
  const products = [
    {name:'photoshop', price:'$99.99'},
    {name:'illustrator',price:'$45.76'}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading : {person.name} {person.age}</h1>
        <p style={{backgroundColor:'yellow',color:'red'}}>My first react app</p> */}
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li> )
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}

        {/* <Person name={nayoks[0]} age="12"></Person>
        <Person name={nayoks[1]} age="23"></Person> */}
      </header>
      
    </div>
  );
}
function Users(){
  const[users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const[count,setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return( 
    <div>
      <h2>Count: {count}</h2>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )

}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:"lightgray",
    height:'200px',
    width:'200px',
    float:'left'
  }

  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}



// function Person(props){
//   const personStyle = {
//     border: '2px solid red',
//     margin:'20px'
//   }
//     return (<div style={personStyle}>
//     <h1>Name : {props.name}</h1>
//     <h3>Age: {props.age}</h3>

//     </div>
//     )

// }
export default App;
