import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setProps] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
        {id: 4, title: 'Javascript 4', body: 'Description'},
    ])

  return (
    <div className="App">
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать</MyButton>
        <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
