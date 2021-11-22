import React from 'react';
import { UIStore } from '../store/store';
import classNames from 'classnames';
import ColorSelect from './ColorSelect';

const FilterMenu = () => {
  const filterUI = UIStore.useState((s) => s.filterUI);

  const toggleFilterMenu = () => {
    UIStore.update((s) => {
      s.filterUI.filterMenuIsOpen = !filterUI.filterMenuIsOpen;
    });
  };

  const changeFilterGender = (e) => {
    UIStore.update((s) => {
      s.filterUI.filtersSelected.gender = e.currentTarget.innerHTML;
    });
  };

  const changeFilterMaterial = (e) => {
    UIStore.update((s) => {
      s.filterUI.filtersSelected.material = e.currentTarget.innerHTML;
    });
  };

  const clearAllFilters = () => {
    UIStore.update((s) => {
      s.filterUI.filtersSelected = {
        gender: 'Men',
        colorsSelected: [],
        material: 'Cotton',
      };
    });
  };

  return (
    <>
      <div className="filter-menu-holder">
        <div className="select-gender-and-close-filter-menu-holder">
          <div className="select-gender-text">Select gender</div>
          <div
            className="close-icon"
            onClick={() => {
              toggleFilterMenu();
            }}
          >
            <img src="/images/close.svg" />
          </div>
        </div>

        <div className="select-gender">
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.gender === 'Men' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterGender(e);
              }}
            >
              Men
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.gender === 'Women' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterGender(e);
              }}
            >
              Women
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.gender === 'Both' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterGender(e);
              }}
            >
              Both
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.gender === 'Pets' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterGender(e);
              }}
            >
              Pets
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.gender === 'All' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterGender(e);
              }}
            >
              All
            </button>
          </div>
        </div>

        {/* Color Select */}
        <div className="color-heading">Colour</div>
        <div className="color-palette-holder">
          <ColorSelect color="Black" colorClass="color-black" />
          <ColorSelect color="Pink" colorClass="color-pink" />
          <ColorSelect color="Orange" colorClass="color-orange" />
          <ColorSelect color="Green" colorClass="color-green" />
          <ColorSelect color="Darkpink" colorClass="color-darkpink" />
        </div>

        {/* Material Select */}
        <div className="material-heading">Material</div>
        <div className="material-btn-holder">
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.material === 'Cotton' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterMaterial(e);
              }}
            >
              Cotton
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.material === 'Fleece' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterMaterial(e);
              }}
            >
              Fleece
            </button>
          </div>
          <div>
            <button
              className={classNames(
                filterUI.filtersSelected.material === 'Both' ? 'selected-btn' : undefined
              )}
              onClick={(e) => {
                changeFilterMaterial(e);
              }}
            >
              Both
            </button>
          </div>
        </div>

        {/* Apply and Clear Section */}
        <div className="apply-clear-holder">
          <div className="apply-btn-holder">
            <button>Apply</button>
          </div>
          <div className="clear-btn-holder">
            <button onClick={() => clearAllFilters()}>Clear filters</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
