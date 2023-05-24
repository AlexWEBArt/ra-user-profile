import ItemList from "./ItemListFunc";

export default function List(props) {
    const { profilesList, handle } = props;
    return (
        <div className="profiles-container">
            <ul className="profiles-list">
                {profilesList.map(item => <ItemList key={item.id} handleClickItemList={handle} {...item}/>)}
            </ul>
        </div>
    )
}