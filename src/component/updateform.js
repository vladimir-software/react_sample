import React, {Component} from 'react';

class Updateform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputForm = this.inputForm.bind(this);
    }
    inputForm(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <h2>Update Form</h2>
                <form 
                    action="/create_process"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
                    }.bind(this)}
                >
                    <input type='hidden' name='id' value={this.state.id}></input>
                    <div>
                        Title
                    </div>
                    <div>
                        <input type="text" name="title" value={this.state.title} onChange={this.inputForm}></input>
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        <textarea name="desc" width="300" height="300" value={this.state.desc} onChange={this.inputForm}></textarea>
                    </div>
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Updateform;