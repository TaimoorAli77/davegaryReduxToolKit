import './App.css';
import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux ToolKit</h1>
      <PostList />
      <AddPostForm/>
    </div>
  );
}

export default App;
