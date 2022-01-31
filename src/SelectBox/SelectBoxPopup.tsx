import * as React from 'react';

import { IPopupProps, ISelectBoxItem } from './SelectBox.types';
import { classes } from './SelectBox.utils';

import './SelectBoxPopup.css';

const INVISIBLE_ITEMS_TOP = 1;
const INVISIBLE_ITEMS_BOTTOM = 1;

export function SelectBoxPopup(props: IPopupProps) {
    const { visible, data, itemHeight, showItemsCount, onChange, top, left } = props;
    const totalItemsCount = data.length;

    const [scrollTop, setScrollTop] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (!event.target) {
            return false;
        }

        const { id } = (event.target as HTMLDivElement).dataset;

        if (!id) {
            return;
        }

        const obj = data.filter(item => String(item.id) === id)[0];

        onChange(obj);
    }

    function onScroll() {
        if (!containerRef.current) {
            return;
        }

        const { scrollTop } = containerRef.current;
        setScrollTop(scrollTop);
    }

    const itemsFrom = Math.max(0, Math.floor(scrollTop / itemHeight) - INVISIBLE_ITEMS_TOP);
    const itemsTo = Math.min(
        itemsFrom + INVISIBLE_ITEMS_TOP + showItemsCount + INVISIBLE_ITEMS_BOTTOM,
        totalItemsCount
    );

    return (
        <div
            className={classes(['sb-popup__main-container', !visible && 'sb-popup__container_hidden'])}
            style={{ maxHeight: `calc(${itemHeight}px * ${showItemsCount})`, top: `${top}px`, left: `${left}px` }}
            onScroll={onScroll}
            ref={containerRef}
        >
            <div className={'sb-popup__size-container'} style={{ height: totalItemsCount * itemHeight }}>
                <div
                    className={'sb-popup__position-container'}
                    style={{ top: `${Math.max(0, scrollTop - itemHeight)}px` }}
                    onMouseDown={onClick}
                >
                    {data.slice(itemsFrom, itemsTo).map((item: ISelectBoxItem) => {
                        return (
                            <div key={item.id} className="sb-popup__item" data-id={item.id}>
                                {item.value}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
