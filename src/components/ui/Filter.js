import React from 'react';
import {getOptions} from '../../services/filter';

export default function Filter(props) {
    const options = getOptions();
    const {filter, changeFilter} = props;
    const getClass = (key) => (key === filter ? 'selected' : ''); //Ternary Operator

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}

//Keys help React identify which items have changed, are added, 
//or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: