import '../../assets/styles/FakeList.css'

function FakeList() {
    return (
        <ul className="fake-list">
            {new Array(20).fill(0).map((item, id) => <FakeItem key={id} />)}
        </ul>
    )
}

function FakeItem() {
    return (
        <li className="fake-item">
            <div className="fake-item__img"></div>
            <div className="fake-item__name"></div>
        </li>
    )
}

export default FakeList