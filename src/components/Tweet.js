import React from 'react';

const Tweet = props => {

  return (
    <li className="tweet">
      <img src={props.userProfileImageUrl} className="profilePic" />
      <div className="namesDiv">
        {props.userName} @{props.userScreenName}
        {new Date(parseInt(props.timestamp)).toDateString()}<br />
      </div>

      <div className = "textDiv">
        {props.text} <br />
      </div>

      <div className="imgDiv">
        <img src={props.mediaImg} />
      </div>

      <div className="buttonsDiv">
        <button type="button" className="icons" onClick = { event => alert('Replied') }>
          <i className="fa fa-reply" aria-hidden="true"></i>
        </button>

        <button type="button" className="icons" onClick = { event => alert('Retweeted') }>
          <i className="fa fa-retweet" aria-hidden="true"></i>{props.retweetCount}
        </button>

        <button type="button" className="icons" onClick = { event => alert('Favorited') }>
          <i className="fa fa-heart" aria-hidden="true"></i>{props.favoriteCount}
        </button>

        <button type="button" className="icons" onClick = { event => alert('More') }>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  );
};

export default Tweet;
