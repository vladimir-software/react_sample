import React, {Component} from 'react';

class Createform extends Component {
    render() {
        return (
            <div>
                <h2>Create Form</h2>
                <form 
                    action="/create_process"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)}
                >
                    <div>
                        Title
                    </div>
                    <div>
                        <input type="text" name="title"></input>
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        <textarea name="desc" width="300" height="300"></textarea>
                    </div>
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Createform;