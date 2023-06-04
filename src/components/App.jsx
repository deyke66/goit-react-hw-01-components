import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import PropTypes from "prop-types"
import transactions from "../transactions.json";
import { Profile } from './profile/profile';
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendlist/friendlist";
import { TransactionHistory } from "./transactions/transactions";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string, 
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}

Statistics.propTypes = {
  title: PropTypes.bool,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
}