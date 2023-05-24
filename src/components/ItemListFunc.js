export default function ItemList(props) {
    const { id, name, handleClickItemList} = props;
    return (
        <li className="item-list" data-id={id} onClick={() => handleClickItemList(props.id)}>
            {name}
        </li>
    )
}