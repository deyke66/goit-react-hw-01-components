export const FriendListItem = ({ avatar, name, isOnline, id }) => {

    return (
      <li className="item">
            <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
      </li>
    );
} 

// function onlineStatus(status) {
//   if (!status) {
    
//   }
// }