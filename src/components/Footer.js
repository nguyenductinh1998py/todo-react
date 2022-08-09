import FilterLink from "./FilterLink";

const Footer = ({ onFilterClick, visibilityFilter }) => {

    return (
        <div className="mt-4 d-flex justify-content-center">
            
            <FilterLink
                filter='SHOW_ALL'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                <i className="fa fa-list-ul u-ul"></i>
            </FilterLink>
            <FilterLink
                filter='SHOW_ACTIVE'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                <i className="fa fa-times t-times"></i>
            </FilterLink>
            <FilterLink
                filter='SHOW_COMPLETED'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                <i className="fa fa-check c-check"></i>
            </FilterLink>
        </div>
    )
}
export default Footer