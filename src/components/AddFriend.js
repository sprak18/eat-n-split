import { useState } from "react";

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      // id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      id: image,
      name: name,
      image: `https://i.pravatar.cc/48?u=${image}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label> 🧑‍🤝‍🧑 Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🎴 Image URL </label>
      <input
        type="text"
        placeholder=" number b/w 1 - 999999"
        value={image}
        onChange={(e) => setImage(Number(e.target.value))}
      />
      <button className="button">Add</button>
    </form>
  );
}
