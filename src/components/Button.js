import PropTypes from 'prop-types'
const Button = ({color,title,btnClick}) => {
    
    return (
        <div>
            <button onClick={btnClick} className='btn' style={{backgroundColor:color}}>{title}</button>
        </div>
    )
}
Button.defaultProps ={
    color:'blue',
    title:'Add',    
}
Button.propTypes ={
    title : PropTypes.string,
    color : PropTypes.string,
    onClick :PropTypes.func,
}
export default Button
