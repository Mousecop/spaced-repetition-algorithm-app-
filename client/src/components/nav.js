
import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';



class Nav extends React.Component {
   
   componentDidMount() {
	  
	}

 

    render() {
       
        return (
        	<div className="Nav">
        		
        		<div className="name">
        			<h1> {this.props.displayName} </h1>
        			 <a className="" href={'/api/auth/logout'}>logout</a>

        		</div>
        	</div>
           
        );
    }
}
   

const mapStateToProps = (state) => ({
displayName: state.displayName,
currentUser: state.currentUser
});

export default connect(mapStateToProps)(Nav);