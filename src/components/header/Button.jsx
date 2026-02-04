import PropTypes from "prop-types"

function Button({ children, onClick, enabled }) {
    return (
        <button className={`button ${!enabled? 'inactive' : ''}`} onClick={onClick} >{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    enabled: PropTypes.bool
}

export default Button