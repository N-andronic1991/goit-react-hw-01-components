import { FriendListItem } from "components/friendListItem/FriendListItem";
import  PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
	return (
		<ul className={css["friend-list"]}>
			{friends.map(({avatar, name, isOnline, id}) => { 
				return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
			}
		)}
       </ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.exact({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id : PropTypes.number.isRequired
	}, ),
	)
}
