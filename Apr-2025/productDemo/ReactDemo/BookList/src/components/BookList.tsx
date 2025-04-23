// import React from 'react'
import style from './bookList.module.css'

const BookList = () => {
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
	    		<li>
	    			<span className={style["name"]}>Name of the Wind</span>
	    			<span className={style['delete']}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style["name"]}>The Wise Man's Fear</span>
	    			<span className={style['delete']}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style["name"]}>Kafka on the Shore</span>
	    			<span className={style['delete']}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style["name"]}>The Master and the Margarita</span>
	    			<span className={style['delete']}>delete</span>
	    		</li>
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