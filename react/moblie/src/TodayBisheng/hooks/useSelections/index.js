/* eslint-disable no-shadow */
import { useState, useMemo } from 'react';
export default function useSelections(items, defaultSelected = []) {
    const [selected, setSelected] = useState(defaultSelected);
    const selectedSet = useMemo(() => new Set(selected), [selected]);
    const singleActions = useMemo(() => {
        const isSelected = (item) => selectedSet.has(item);
        const select = (item) => {
            selectedSet.add(item);
            return setSelected(Array.from(selectedSet));
        };
        const unSelect = (item) => {
            selectedSet.delete(item);
            return setSelected(Array.from(selectedSet));
        };
        const toggle = (item) => {
            if (isSelected(item)) {
                unSelect(item);
            }
            else {
                select(item);
            }
        };
        return { isSelected, select, unSelect, toggle };
    }, [selectedSet]);
    const allActions = useMemo(() => {
        const selectAll = () => {
            items.forEach((o) => {
                selectedSet.add(o);
            });
            setSelected(Array.from(selectedSet));
        };
        const unSelectAll = () => {
            items.forEach((o) => {
                selectedSet.delete(o);
            });
            setSelected(Array.from(selectedSet));
        };
        const noneSelected = items.every((o) => !selectedSet.has(o));
        const allSelected = items.every((o) => selectedSet.has(o)) && !noneSelected;
        const partiallySelected = !noneSelected && !allSelected;
        const toggleAll = () => (allSelected ? unSelectAll() : selectAll());
        return { selectAll, unSelectAll, noneSelected, allSelected, partiallySelected, toggleAll };
    }, [selectedSet, items]);
    return {
        selected,
        setSelected,
        ...singleActions,
        ...allActions,
    };
}
