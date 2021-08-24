import React from 'react'
import { Helmet } from 'react-helmet'

const Catego = () => {

    const categories = [
        'Poultry',
        'Fresh Eggs',
        'Pigsty',
        'Goats, Sheep & mammals',
        'Park Animals',
        'Purebred Seed - ARTIFICIAL INSEMINATION',
        'Food & Livestock Products'
    ]

    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-1.12.4.js";
    script.async = true;
    document.body.appendChild(script);

    const scripta = document.createElement('script');
    scripta.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
    scripta.async = true;
    document.body.appendChild(scripta);

    const scriptinner = document.createElement('script');
    scriptinner.innerHTML = `
    $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
    `
    scriptinner.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(scriptinner);


    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
                <link rel="stylesheet" href="/resources/demos/style.css" />
            </Helmet>
            <div className="col-lg-3 col-md-5 sidebartop">
                <div className="sidebar">
                    <div className="sidebar__item">
                        <h4>Department</h4>
                        <ul>
                            {categories.map((category => (
                                <li key={category}>
                                    <a href="#">{category}</a>
                                </li>
                            )))}
                        </ul>
                    </div>
                    <div className="sidebar__item">
                        <h4>Price</h4>
                        <div className="price-range-wrap">
                            <p>
                                <label for="amount">Price range:</label>
                                <input type="text" id="amount" readonly style={{ border: '0', color: '#f6931f', fontWeight: 'bold' }} />
                            </p>

                            <div id="slider-range"></div>
                        </div>
                    </div>
                    <div className="sidebar__item"></div>
                    <div className="sidebar__item"></div>
                    <div className="sidebar__item"></div>
                </div>
            </div>
        </>
    )
}

export default Catego
