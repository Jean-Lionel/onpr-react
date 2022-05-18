import * as React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Publicity() {

  return (
    <>
      <h1>our tweets news</h1>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NigabaG"
        options={{ height: 200 }}
      />

      <TwitterTweetEmbed
        tweetId={'1526931663325958145'}
      />

      <TwitterShareButton
        url={'https://facebook.com/NigabaG'}
        options={{ text: '#reactjs is awesome', via: 'NigabaG' }}
      />

      <TwitterMentionButton
        screenName={'NigabaG'}
      />



    </>
  );
}

export default Publicity;
