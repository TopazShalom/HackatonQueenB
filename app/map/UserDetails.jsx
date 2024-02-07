const user_data = {
    "user": [
      {
        "user_name": "topazshalom9",
        "name": "Topaz Shalom",
        "age": "24",
        "chosen_topic": "Health",
        "current_level": "1",
        "current_question": "2",
        "currnet_coins": "50"
      }
    ]
  }


 function getUsers() {
  return user_data.user;
  //   await fetch("http://localhost:4000/user", {
  //   next: {
  //     revalidate: 0,
  //   },
  // });

}

export default function UserDetails() {
  const users = getUsers();
  return (
    <>
      {/*{users.map((user) => (*/}
        <div key={user_data.user[0].user_name}>
          <h3>Hello {user_data.user[0].name}</h3>
          <h2 className="Level">
            Level {user_data.user[0].current_level} : {user_data.user[0].chosen_topic}
          </h2>
          <h2 className="Coins">Coins: {user_data.user[0].currnet_coins}</h2>
        </div>
      {users.length === 0 && <p>There are no users</p>}
    </>
  );
}
