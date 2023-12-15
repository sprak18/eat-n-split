export default function Friend({
  id,
  name,
  image,
  balance,
  selectedFriend,
  setSelectedFriend,
}) {
  return (
    <li>
      <img src={image} alt="img" />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
        {balance === 0
          ? `You and ${name} are even`
          : balance > 0
          ? `${name} owes you $${Math.abs(balance)}`
          : `You owe ${name} $${Math.abs(balance)}`}
      </p>
      <button className="button" onClick={() => setSelectedFriend(id)}>
        {selectedFriend === id ? "Close" : "Select"}
      </button>
    </li>
  );
}
