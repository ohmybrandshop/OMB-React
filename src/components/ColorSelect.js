import React from "react";
import classNames from "classnames";
import { UIStore } from "../store/store";

const ColorSelect = ({ color, colorClass }) => {
	const filterUI = UIStore.useState((s) => s.filterUI);

	const toggleColor = (color) => {
		UIStore.update((s) => {
			let temp = [...s.filterUI.filtersSelected.colorsSelected];
			if (temp.includes(color)) {
				temp.splice(temp.indexOf(color), 1);
			} else {
				temp.push(color);
			}
			s.filterUI.filtersSelected.colorsSelected = temp;
		});
	};

	const colorIsSelected = (color) => {
		if (filterUI.filtersSelected.colorsSelected.includes(color)) return true;
		return false;
	};

	return (
		<div
			className={classNames(
				"border-wrapper",
				colorIsSelected(color) ? "border-active" : undefined
			)}
		>
			<div
        className={classNames('color-container', colorClass )}
				onClick={() => {
					toggleColor(color);
				}}
			>
				{filterUI.filtersSelected.colorsSelected.includes(color) ? (
					<img src="/images/tick.svg" />
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ColorSelect;
