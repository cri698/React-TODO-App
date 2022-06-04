import React from 'react';
import CheckBox from './CheckBox';

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;// Months from 1-12
var day = dateObj.getUTCDay();
var year = dateObj.getUTCFullYear();

var newDate = month + "/" + day + "/" + year;




export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text + " " + newDate}
                </label>
            </div>
        </li>
    );
}
