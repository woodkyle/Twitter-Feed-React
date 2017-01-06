import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {

  let data = props.data.map(tweet => {

    let mediaUrl = '';
    if(tweet.entities.media){
      mediaUrl = tweet.entities.media[0].media_url
    }
    return (
      <Tweet
        id={tweet.id_str}
        text={tweet.text}
        userName={tweet.user.name}
        userScreenName={tweet.user.screen_name}
        userProfileImageUrl={tweet.user.profile_image_url}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        mediaImg={mediaUrl}
        favorited={tweet.favorited}
        retweeted={tweet.retweeted}
        timestamp={tweet.timestamp_ms}
      />
    );
  });

  return (
    <ul>
      {data}
    </ul>
  );

};

export default TwitterFeed;
