import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
);

export default Action;