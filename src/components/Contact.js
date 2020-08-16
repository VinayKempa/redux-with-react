import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCard, fetchUsers } from "../actions/cardActions";

const Contact = (props) => {
  console.log("Contact Props: ", props);
  const [cards, setCards] = useState(props.cards || []);
  const [users, setUsers] = useState(props.cards || []);
  const onButtonClick = (id) => {
    props.deleteCard(id);
  };
  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  useEffect(() => {
    props.fetchUsers();
  }, []);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);
  return (
    <div>
      {(cards || []).map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>This is Contact Page component</p>
            <button
              className="ui primary right floated button"
              onClick={() => onButtonClick(card.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      {(users || []).map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/${card.name}`} className="ui header">
              {card.name}
            </Link>
            <p>{card.email}</p>
            <a href={card.website} target="_blank">
              {card.website}
            </a>
            <button
              className="ui primary right floated button"
              onClick={() => onButtonClick(card.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
