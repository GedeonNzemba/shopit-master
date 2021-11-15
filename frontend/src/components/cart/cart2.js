import React, { Component } from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";

const fetchStyles = () =>
    fetch(
        "https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css"
    ).then(response => response.text());

class Carte extends Component {
    state = {
        style: ""
    };

    componentDidMount() {
        fetchStyles().then(data => this.setState({ style: data }));
    }

    Wrapper = () => Styled.div`
    ${this.state.style}
  `;
    render() {
        const Wrapper = this.Wrapper();
        return (
            <div className="App">
                <Wrapper>
                    <h1>Styled</h1>
                </Wrapper>
                <h1>Not Styled</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        );
    }
}

const rootElement = document.getElementById("thiscss");
ReactDOM.render(<Carte />, rootElement);