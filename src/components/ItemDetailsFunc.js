export default function ItemDetails(props) {
    const { details } = props;
    const keyProp = Object.keys(details);
    const valuesProp = Object.values(details)
    return (
        <>
            {valuesProp.map((item, index) => <li key={index} className={'item-details ' + keyProp[index]}>{keyProp[index][0].toUpperCase() + keyProp[index].slice(1) + ': ' + item}</li>)}
        </>
    )
}