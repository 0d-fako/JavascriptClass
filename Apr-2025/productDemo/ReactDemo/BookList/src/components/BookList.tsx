// import React, { useState } from 'react'
import style from './bookList.module.css'





const BookList = () => {

    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    const deleteHandler =(item:string)=> {
        bookList.filter((book) => book !== item);
        

    }

    // const[] = useState(bookList)

    return (
        <div id="wrapper">
	    <header>
			<div id={style['page-banner']}>
				<h1 className="title"> Book Collections</h1>
          <p>Books</p>
          <form id={style['search-books']}>
            <input type="text" placeholder="Search books..." />
          </form>
	    	</div>
	    </header>
	    <div id={style['book-list']}>
	    	<h2 className={style["title"]}>Books to Read</h2>
	    	<ul>
                {
                    bookList.map((book, index) => (
                        <li key = {index}>
                            <span className= {style['name']}> {book}</span>
                         <span className= {style['delete']} onClick={()=> deleteHandler(book)}>delete</span>
                        </li>
                    ))
                }

	    	</ul>
	    </div>
	    <form id={style["add-book"]}>
	    	<input type="text" placeholder="Add a book..." />
			<button type="submit" aria-label="Add Button">Add</button>
	    </form>

    </div>
    )
}   

export default BookList;