import React from "react";
import { useDispatch } from "react-redux";
import { filterTodoActionCreator } from "../../redux/filter/actions";
import { TYPE_OF_FILTER } from "../../redux/filter/reducers";
import Button from "../../components/button"
import { clearTodoActionCreator } from "../../redux/todo/actions";
import { CLEAR_TODO } from "../../redux/todo/types";


const FilterButtons = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL))}>
                Show All
            </Button>
            <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>
                Show Active
            </Button>
            <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETE))}>
                Show Completed
            </Button>
            <Button onClick={() => dispatch(clearTodoActionCreator(CLEAR_TODO))}>Clear All</Button>
        </div>
    )
}

export default FilterButtons