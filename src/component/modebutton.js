import React, {Component} from 'react';

class Modebutton extends Component {
    render() {
        return (
            <div>
                <input 
                    type="button" value="Create"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}
                ></input>
                <input 
                    type="button" value="Update"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}
                ></input>
                <input 
                    type="button" value="Delete"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}
                ></input>

            </div>
        );
    }
}

export default Modebutton;