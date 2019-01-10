import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import WatchButton from './WatchButton';

const VideoListItem = ({ video }) => {
  const {
    title,
    channelTitle,
    description,
    thumbnails: {
      medium: { url }
    }
  } = video.snippet;
  return (
    <View>
      <Card title={null} containerStyle={styles.cardStyle}>
        <Image style={styles.ImageStyle} source={{ uri: url }} />
        <View style={styles.contentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>

          <Text style={styles.channelTitleStyle}>{channelTitle}</Text>

          <Text style={styles.descriptionStyle}>{description}</Text>
          <WatchButton videoId={video.id.videoId} />
        </View>
      </Card>
    </View>
  );
};
const styles = {
  ImageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  cardStyle: {
    padding: 5
  },
  contentStyle: {
    flex: 1,
    padding: 5
  },
  titleStyle: {
    fontSize: 12,
    marginBottom: 5
  },
  channelTitleStyle: {
    fontSize: 11,
    alignSelf: 'flex-end',
    marginBottom: 5,
    color: '#777'
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center'
  }
};
export default VideoListItem;
