import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="text-field__icon text-field__icon_search post-filter">
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Search"
                    className="text-field__input"
                />
            </div>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
