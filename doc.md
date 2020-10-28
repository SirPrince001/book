# BOOK API

> This is API for Authors to pulish their books 

## Create Book

> This is use to create a new book to be store in the database
- **ENDPOINT :**   `https://bookapis.herokuapp.com/api/v1/create-book`

- **METHOD :** `POST`

- **PARAMETERS :**
```JSON
{
    "book_title":"Startup 102",
    "author_name":"Emeka",
    "age":40,
    "genre":"fiction"
}
```
- Response

```JSON
```

## Get All Books
> This route fetch all the books in the database

- **ENDPOINT :**  `https://bookapis.herokuapp.com/api/v1/get-all-booKs`

- **METHOD :** `GET`

## Get A Book By It ID
> This route allows you fetch a book by providing it ID

- **ENDPOINT :** `https://bookapis.herokuapp.com/api/v1/get-book-by-id/:id` 

- **METHOD :** `GET`

## Update Book By It ID
> This route allows you to update a particular book by it ID

- **ENDPOINT :** `https://bookapis.herokuapp.com/api/v1/update-book-by-id/:id`

- **METHOD :** `POST`

## Delete Book By It ID
> This allows you to delete a book using a specific book ID 
- **ENDPOINT :** `https://bookapis.herokuapp.com/api/v1/delete/:id`

- **METHOD :** `DELETE`