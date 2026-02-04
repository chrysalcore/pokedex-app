import PropTypes from "prop-types"

function Sliders({ children }) {
    return (
        <div className="slider">
            { children }
        </div>
    )
}

Sliders.propTypes = {
    children: PropTypes.node.isRequired
}

export default Sliders