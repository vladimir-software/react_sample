import './App.css';
import Subject from './component/subject'
import Sublink from './component/sublink'
import Explain from './component/explain'
import Modebutton from './component/modebutton'
import Createform from './component/createform'
import Updateform from './component/updateform'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      selected_id:0,
      welcome: {title:'Welcome', desc:'Welcome Everyone!'},
      subject: {title:'WEB', desc:'World Wide Web'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  getread() {
    var i = 0;
      while (i<this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_id){
          return data;
        } else if (this.state.selected_id === 0) {
          var _welcome = Object.assign({id:this.state.selected_id},this.state.welcome);
          return _welcome;
        }
        i = i + 1;
      }
  }
  getcontent() {
    var _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Explain title={_title} desc={_desc}></Explain>;
    } else if (this.state.mode === "read") {
      var data = this.getread();
      _article = <Explain title={data.title} desc={data.desc}></Explain>;
    } else if (this.state.mode === "create") {
      _article = <Createform
        onSubmit={function(_title, _desc){
          var _id = this.state.contents.length + 1;
          var _content = this.state.contents.concat(
            {id:_id, title:_title, desc:_desc}
          );
          this.setState(
            {
              mode:"read",
              selected_id: _id,
              contents:_content
            }
          );
        }.bind(this)}
      ></Createform>;
    } else if (this.state.mode === 'update') {
      var _contents = this.getread();
      _article = <Updateform
          data = {_contents}
          onSubmit={function(_id,_title,_desc){
            var i = 0;
            var _content = Array.from(this.state.contents);
            var _welcome = this.state.welcome;
            if (_id === 0) {
              _welcome = {title:_title, desc:_desc}
            } else {
              while (i<_content.length) {
                if (_id === _content[i].id){
                  _content[i] = {id:_id, title:_title, desc:_desc};
                  break;
                }
                i=i+1;
              }
            }
            this.setState({
              mode: 'read',
              selected_id: _id,
              welcome:_welcome,
              contents:_content
            });
          }.bind(this)}
        ></Updateform>;
    }
    return _article;
  }
  render() {
    
    return (
      <div className="App">
        <Subject 
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          title={this.state.subject.title} 
          desc={this.state.subject.desc}
        >
        </Subject>
        <Modebutton
          onChangeMode={function(_mode){
            if (_mode === 'delete') {
              if (window.confirm('Do you really delete?')) {
                var _content = Array.from(this.state.contents);
                var i = 0;
                if (this.state.selected_id === 0) {
                  alert('Welcome page can not be deleted!')
                } else {
                  while (i<_content.length) {
                    if (_content[i].id === this.state.selected_id) {
                      _content.splice(i,1);
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({mode:'welcome', contents:_content, selected_id:0})
                  alert('Successfully deleted!')
                }
              }
            } else {
              this.setState({mode:_mode});
            }
          }.bind(this)}
        ></Modebutton>
        <Sublink 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></Sublink>
        {this.getcontent()}
      </div>
    );
  }
}

export default App;
