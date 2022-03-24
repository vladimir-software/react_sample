import React, {Component} from 'react'

class Sublink extends  Component {
    shouldComponentUpdate(newProps, newState) {
        if (newProps.data === this.props.data) {
            return false;
        } else {
            return true;
        }
    }
    render () {
        var data = this.props.data;
        var lists = [];
        var i = 0;
        while (i<data.length){
            lists.push(
                <li 
                    key={data[i].id}
                ><a 
                    data-id={data[i].id}
                    href={"/componet/"+data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >{data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default Sublink;