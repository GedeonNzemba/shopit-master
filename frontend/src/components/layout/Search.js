import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';


const Search = ({ history }) => {
    const { t, i18n  } = useTranslation();

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
                        placeholder={t('farm.header.navBar.search_inputHolder')}
                    />

                </div>
                <div className="input-group-append">
                    <Button className="search_button bg-black" id="search_btn" onClick={searchHandler} >{t('farm.header.navBar.search_button')}</Button>
                </div>

            </form>
        </>

    )
}

export default Search

// TOUCH A LITTLE ON SHOP PAGES 
// CHECKOUT PAGE
// ADMIN SECTION
// FOOTER