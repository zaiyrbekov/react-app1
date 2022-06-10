import React,{useState, useEffect} from 'react'
import { Todolist } from './ToDoList/ToDolist';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if (data){
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {
 
  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [isbn, setIsbn]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      author,
      isbn
    }
    setbooks([...books,book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  // delete book from LS
  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>BookList App</h1>
      <div className='main'>

        <div id='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <input type="text" placeholder='Name...' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <input type="text" placeholder='Last Name...' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br/>
            <input type="text" placeholder='Grate..' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit">
              ADD
            </button>
          </form>
        </div>

        <div id='view-container'>
          {books.length>0&&<>
            <div id='table-responsive'>
              <table id='table'>
                <thead>
                  <tr>
                    <th>Name:</th>
                    <th>Last Name:</th>
                    <th>Grate:</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Todolist books={books} deleteBook={deleteBook}/> 
                </tbody>
              </table>
            </div>
          </>}
        </div>

      </div>
    </div>
  )
}

export default App