import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({title,onClickAddTask,isShowAddTask}) => {
    const location =  useLocation()
    return (
        <header className='header'>
           <h1>{title}</h1> 
            {location.pathname==='/' && <Button color={isShowAddTask?'red':'green'} 
            text={isShowAddTask ? 'Hide' : 'Add Task'}
            btnClick={onClickAddTask}/>}
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

