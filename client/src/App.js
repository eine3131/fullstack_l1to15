import Navbar from './components/customers/Navbar';
import Home from './components/customers/Home';

//1)
// import Customers from './components/customers/customers';

//2)   
// function App() {
//   const title = "Welcome to the new blog";
//   const likes = 50;
//   const link = "http://www.google.com";
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title} </h1>
//         <p> Liked {likes} times </p>
//         {/* <p> {[1,2,3,4,5]} </p> */}
//         <p> {Math.random() *10} </p>
//         <a href={link}> Google site </a>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Customers/> */}
        <Home />
      </div>
    </div>
  );
}

export default App;