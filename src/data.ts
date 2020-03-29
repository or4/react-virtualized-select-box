import { ISelectBoxItem } from './package/src/SelectBox/SelectBox.types';

export const getMockValues = (count: number = 5): ISelectBoxItem[] => {
    return Array.from(new Array(count)).map((el, index) => ({
        id: index,
        value: `value ${index + 1}`,
    }));
};
