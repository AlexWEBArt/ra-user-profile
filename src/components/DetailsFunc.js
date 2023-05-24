import ItemDetails from "./ItemDetailsFunc";

export default function Details(props) {
    return (
        <div className="profile-details">
            <img className="profile-avatar" src={props.avatar} alt={props.name}></img>
            <h3 className="profile-name">{props.name}</h3>
            <ul className="details-list">
                <ItemDetails details={props.details}/>
            </ul>
        </div>
    )
}