const FilterLink = ({
    filter,
    children,
    onClick
}) => {
    return (
        <div
            className="i-footer mx-3"
            onClick={e => {
                e.preventDefault();
                onClick(filter);
        }}>
            {children}
        </div>    
    );
};

export default FilterLink