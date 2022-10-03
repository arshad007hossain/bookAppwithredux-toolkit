import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "new programmar", author: "john smith" },
    { id: uuidv4(), title: "Connecting the dot", author: "john smith" },
  ],
  countBooks: 2
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
      state.countBooks = state.countBooks + 1
      toast.success("New Book Added");
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
        toast.info("Book Updated");
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
      state.countBooks = state.countBooks - 1
      toast.warn("Book Deleted");
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
