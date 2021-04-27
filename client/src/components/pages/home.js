import { connect } from 'react-redux';
import React, { Component } from 'react'
import {welcomeMessage} from '../../actions'

class Home extends Component {
    componentDidMount() {
        this.props.welcomeMessage();
    }
    render() {
        return (
            <div>
                <p className="text-purple-600">{this.props.message}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {message: state.message}
}

export default connect(mapStateToProps, {welcomeMessage})(Home)