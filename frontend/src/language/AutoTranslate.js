import {useEffect, useState} from 'react'
import axios from 'axios'

export  const AutoTranslate = ({translationText}) => {

    const [translationResult, setTranslationResult] = useState('')


    useEffect(() => {
        axios({
            method: 'post',
            url: 'https://translate.mentality.rip/translate',
            headers: { "Content-Type": "application/json" },
            data: {
                q: translationText,
                source: "en",
                target: "fr",
                format: "text"
            }
        }).then(function (response) {

            setTranslationResult(response.data.translatedText);
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [translationText]);

    return (
        <div>
            
        </div>
    )
}

export default AutoTranslate
