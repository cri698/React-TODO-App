import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common'; // this all file util
import {getAll, addToList, updateStatus} from '../../services/todo';


// I think this file where I should put a function call addDate

//this is a stateful component which has own state object and is dependent on it's properties
class StateProvider extends Component { // creates a inheritance to Commponent
    constructor() {
        super(); // call's parent's constructor method and gets access to the parent's properties
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll()
        }
    }

    render() {
        // let - value can be change and didn't have it const because I want it to change
        // taking the property in children
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false});

        //  this.setstate() method changes the value
        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }
}

export default StateProvider; //can only have one default file
