import { Profile } from "./profile/Profile";
import user from "user.json";
import data from "data.json";
import { Statistics } from "./statistics/Statistics";
import friends from "friends.json";
import { FriendList } from "./friendList/FriendList";
 import transactions from "transactions.json"; 
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
