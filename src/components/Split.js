import { useState } from "react";

export default function Split({ friend, friendList, setFriendList }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = bill - yourExpense;
  const [payee, setPayee] = useState(0);

  function handleSplit(e) {
    e.preventDefault();
    if (payee === 0) friend.balance = friend.balance + (bill - yourExpense);
    if (payee === 1) friend.balance = friend.balance - (bill - friendExpense);
    setBill(0);
    setYourExpense(0);
    setFriendList((friend) =>
      friendList.map((f) =>
        f.id === friend.id ? (f.balance = friend.balance) : f
      )
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💵 Bill value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍 Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      />
      <label>👬 {friend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>🤑 Who's paying the bill?</label>
      <select value={payee} onChange={(e) => setPayee(Number(e.target.value))}>
        <option value="0">You</option>
        <option value="1">{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
