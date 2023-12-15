import { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Split from "./Split";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(false);

  const [friendList, setFriendList] = useState(initialFriends);

  function onAddFriend(newFriend) {
    setFriendList((friends) => [...friends, newFriend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {friendList.map((friend) => (
            <Friend
              id={friend.id}
              name={friend.name}
              image={friend.image}
              balance={friend.balance}
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
              key={friend.id}
            />
          ))}
        </ul>
        {addFriend && <AddFriend onAddFriend={onAddFriend} />}
        <button className="button" onClick={() => setAddFriend(!addFriend)}>
          {addFriend === true ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <Split
          friend={friendList.find((friend) => friend.id === selectedFriend)}
          friendList={friendList}
          setFriendList={setFriendList}
        />
      )}
    </div>
  );
}
