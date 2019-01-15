import React, { Component } from "react";
import styled from "styled-components";
import { List, Icon } from "semantic-ui-react";

const Container = styled.div`
  padding: 10px 80px;
  animation: fadein 1s ease-in;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & i {
    color: #a094a8;
    font-size: 1.8em;
    cursor: pointer;

    &:hover {
      color: #ff5dad;
    }
  }

  & a {
    padding: 0 !important;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <List horizontal>
          <List.Item>
            <a href="https://github.com/onlyserenity">
              <Icon name="github" />
            </a>
          </List.Item>
          <List.Item>
            <a href="https://www.linkedin.com/in/amjedcha/">
              <Icon name="linkedin" />
            </a>
          </List.Item>
        </List>
      </Container>
    );
  }
}
