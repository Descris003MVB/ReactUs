import React, { useEffect, useState } from "react";

export default function UsersAndPosts() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //Пользователи из дано
      .then((res) => res.json())
      .then((data) => setUsers(data));
    fetch("https://jsonplaceholder.typicode.com/posts") //Посты из дано
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Неизвестный пользователь";
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Список постов</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0" }}>
            Автор: {getUserName(post.userId)}
          </h4>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}