import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Card = (props) => {
  //   useEffect(() => {
  //     setUser(props.match.params.user);
  //   }, [props.match.params.user]);

  const { title, body } = props.card;
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title || ""}</h3>
      <p>
        This is Card Page component with User Name:{" "}
        <strong>{body || ""}</strong>
      </p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;
  return {
    card: state.cards.find((card) => card.title === title),
  };
};

export default connect(mapStateToProps)(Card);
