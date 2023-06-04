import styles from "./friendlist.module.css";
import { FriendListItem } from "./friendlistItem/friendlistItem";

export const FriendList = ({friends}) => (
    <ul className={styles.friend_list}>
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                id={item.id}
            />
        ))}   
    </ul>
);