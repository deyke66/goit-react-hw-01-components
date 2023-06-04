// import friends1 from "../../friends.json";
import { FriendListItem } from "./friendlistItem/friendlistItem";

export const FriendList = ({friends}) => (
    <ul className="friend-list">
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