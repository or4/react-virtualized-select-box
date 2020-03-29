import * as React from 'react';
import { createPortal } from 'react-dom';

import { ISelectBoxPortalProps } from './SelectBox.types';

export class SelectBoxPortal extends React.PureComponent<ISelectBoxPortalProps> {
    private element: HTMLDivElement;

    public constructor(props: ISelectBoxPortalProps) {
        super(props);

        const { id, mix } = props;

        this.element = document.createElement('div');

        if (id) {
            this.element.id = id;
        }

        if (mix) {
            this.element.classList.add(mix);
        }
    }

    public componentDidMount() {
        document.body.appendChild(this.element);
    }

    public componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    public render() {
        return createPortal(this.props.children, this.element);
    }
}
