import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./Transactions/Transactions.jsx";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user}/>
      <Statistics title stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
