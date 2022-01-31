export interface ISelectBoxProps {
    id?: string;
    onSelected: (value: any) => void;
    data: ISelectBoxItem[];
    itemHeight: number;
    showItemsCount: number;
    mix?: string;
    popupMix?: string;
}

export interface ISelectBoxState {
    visible: boolean;
}

export interface IPopupProps {
    id?: string;
    data: ISelectBoxItem[];
    visible: boolean;
    onChange: (value: ISelectBoxItem) => void;
    itemHeight: number;
    showItemsCount: number;
    top: number;
    left: number;
}

export interface IPopupState {
    scrollTop: number;
}

export interface ISelectBoxItem {
    id: number;
    value: string;
}

export interface ISelectBoxPortalProps {
    id?: string;
    mix?: string;
}
