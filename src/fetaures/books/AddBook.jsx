import React from "react";
// import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ title, author }) => {
    // e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true })
  };
  return (
    <div>
      {/* <ToastContainer autoClose={1000} /> */}
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            // type="text"
            // id="title"
            // name="title"
            // value={title},

            // onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title?.type === "required" && "Title is required"}
        </div>
        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input
            {...register("author", { required: "Author is required"})}
            // type="text"
            // id="author"
            // name="author"
            // value={author}
            // onChange={(e) => setAuthor(e.target.value)}
            // required
          />
          {errors.author?.type === "required" && "Author  is required"}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;


