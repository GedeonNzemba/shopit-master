import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Search = ({ history }) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/search')
        }
    }

    return (
        <>

            <form onSubmit={searchHandler} id="search_form">



                <div className="form-group has-search" >
                    <div className="fa fa-search form-control-feedback"></div>
                    <input
                        type="text"
                        id="search_field"
                        className="form-control"
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search products, brand and categories"
                    />

                </div>
                <div className="input-group-append">
                    <Button className="search_button bg-black" id="search_btn" onClick={searchHandler} >search</Button>
                </div>

            </form>
        </>

    )
}

export default Search
