import React from 'react';
import defaultClasses from './myComponent.scss';
import defaultClassesLess from './myComponent.less';


const MyComponent = () => (
    <div className={defaultClasses.root}>
        <button className={`${defaultClasses.button} ${defaultClassesLess.button}`}>My Component</button>
    </div>
);

export default MyComponent;