import React from 'react';
import ReactDOM from 'react-dom';
import { getMockValues } from './data';
import { ISelectBoxItem } from './package/src/SelectBox/SelectBox.types';

import './index.css';

import { SelectBox } from './package/src';

function App() {
    const [selected, setSelected] = React.useState<object | null>(null);

    function onSelected(selected: ISelectBoxItem) {
        console.log('selected', selected);
        setSelected(selected);
    }

    const data = getMockValues(50000);

    return (
        <div className="app">
            <div className="container">
                <SelectBox id={'test-select-box-1'} onSelected={onSelected} data={data} />
                <div className="caption">{`Selected: ${JSON.stringify(selected)}`}</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
