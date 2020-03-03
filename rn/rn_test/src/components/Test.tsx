import {connect} from 'react-redux';
import TestShow from './TestShow';
import { QUERYBLOG } from '../redux/action/actionTypes';

function mapStateToProps(state: any){
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        onAdd(){
            dispatch({
                type: QUERYBLOG
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestShow);