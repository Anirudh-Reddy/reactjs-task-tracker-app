import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onClickAddTask}) => {
    
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button color='green' title='Add' btnClick={onClickAddTask}/>
        </header>
    )
}
Header.defaultProps ={
    title : 'Task Tracker'
}
Header.protoTypes = {
    title : PropTypes.string.isRequired
}
export default Header

