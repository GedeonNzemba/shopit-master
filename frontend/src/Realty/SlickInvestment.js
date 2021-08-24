import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./slick.css";
// import '../components/bootstrap.css'


const SlickInvestment = (props) => {

  return (
    <>
      <Carousel touch={true} controls={false}>
        <Carousel.Item>
          {/* <img
      className="d-block w-100"
      src={image_3}
      alt="First slide"
    /> */}
          {props.img_1}
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
      className="d-block w-100"
      src={image_1}
      alt="Third slide"
    /> */}
          {props.img_2}

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
      className="d-block w-100"
      src={image_2}
      alt="Third slide"
    /> */}
          {props.img_3}

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default SlickInvestment



// class SlickInvestment extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }

//     componentDidMount() {  }

//     componentWillUnmount() {  }

//     render() {
//        const addReactBootsrap = url => {
//            const script = document.createElement('script')
//            script.src = url
//            script.async = true
//             script.crossOrigin = true
//            document.body.appendChild(script)
//        }

//        addReactBootsrap('https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js');


//       return (
//         <>
//             {/* <Helmet>
//               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>

//           </Helmet> */}

//           <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={image_3}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       {/* <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={image_1}
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       {/* <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={image_2}
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

//         </>  

//       );
//     }
// }

// export default SlickInvestment
