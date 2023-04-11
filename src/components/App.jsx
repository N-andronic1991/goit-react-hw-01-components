import { Profile } from "./profile/Profile";
import user from "data/user.json";
import data from "data/data.json";
import { Statistics } from "./statistics/Statistics";
import friends from "data/friends.json";
import { FriendList } from "./friendList/FriendList";
import transactions from "data/transactions.json"; 
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
   
  );
};
