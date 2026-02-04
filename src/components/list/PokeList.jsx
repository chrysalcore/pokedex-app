import PropTypes from 'prop-types'
import '../../assets/styles/PokeList.css'
import Pokemon from './Pokemon'

function PokeList({ data }) {
    return (
        <ul className="poke-list">
            {data.map(item => <Pokemon {...item} key={item.name} />)}
        </ul>
    )
}

PokeList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        url: PropTypes.string
    })).isRequired
}

export default PokeList