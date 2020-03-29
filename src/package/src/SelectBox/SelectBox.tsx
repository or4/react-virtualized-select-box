import * as React from 'react';

import { ISelectBoxItem, ISelectBoxProps } from './SelectBox.types';
import { classes } from './SelectBox.utils';
import { SelectBoxPopup } from './SelectBoxPopup';
import { SelectBoxPortal } from './SelectBoxPortal';

import './SelectBox.css';
import { useWindowSize } from './useWindowSize';

export function SelectBox(props: ISelectBoxProps) {
    const [visible, setVisible] = React.useState(false);
    const { onSelected, mix, popupMix } = props;

    const inputElement = React.useRef<HTMLInputElement>(null);

    function onChange(value: ISelectBoxItem) {
        setVisible(false);
        onSelected(value);
    }

    function onBlur() {
        if (visible) {
            setVisible(false);
        }
    }

    function onToggleVisible() {
        setVisible(!visible);
    }

    // when resize window rerender this component
    useWindowSize();

    let top = 0;
    let left = 0;

    if (inputElement.current) {
        const rect = inputElement.current.getBoundingClientRect();

        top = rect.top + rect.height;
        left = rect.left;
    }

    return (
        <div className={classes(['sb-container', mix])}>
            <input className={'sb-input'} ref={inputElement} onClick={onToggleVisible} onBlur={onBlur} />
            <SelectBoxPortal id={props.id} mix={popupMix}>
                <SelectBoxPopup visible={visible} onChange={onChange} top={top} left={left} {...props} />
            </SelectBoxPortal>
        </div>
    );
}

SelectBox.defaultProps = {
    itemHeight: 24,
    showItemsCount: 8,
};
