import PropTypes from "prop-types"

function Search({ onType, ref }) {
    return (
        <input ref={ref} className="searchbox" type="text" onChange={(e) => onType(e.target.value)} />
    )
}

Search.propTypes = {
    onType: PropTypes.func.isRequired,
    ref: PropTypes.exact({
        current: PropTypes.any
    })
}

export default Search