import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const RightSideTwitter = () => {
    return ( 
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Onpr2018"
        options={{height: '400px' }}
        />
     );
}
 
export default RightSideTwitter;