import * as React from 'react';
import { Grid } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import SpotifyWebApi from 'spotify-web-api-js';
// import styles from '../../styling/SpotifyComponent.module.scss';
import play from './images/play.png';
import pause from './images/pause.png';
import skipy from './images/skip.png';
import { SearchIcon } from '@heroicons/react/outline';

export const spotifyObject = new SpotifyWebApi();

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';
const clientID = '66ea4aba7f9344fea526f6a5bf14d6bf';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      // eslint-disable-next-line no-param-reassign
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

// const handleClickPause = () => {
//   spotifyObject.pause();
//   setImage(play);
// };

const handleClickSkip = () => {
  spotifyObject.skipToNext();
};

const logo = require('./images/skip.png');

function Spotify() {
  const [token, setToken] = React.useState(''); // to set the spotify authorization token
  const [song, setSong] = React.useState(''); // song name
  const [artist, setArtist] = React.useState(''); // song artitst
  const [image, setImage] = React.useState(''); // song album image
  const [playBackStatus, setPlayBackStatus] = React.useState(false); // if song is playing or not
  const [playPause, setPlayPause] = React.useState(''); // play pause image
  const [skip, setSkip] = React.useState(skipy); // skip image

  React.useEffect(() => {
    const hash = getTokenFromResponse();
    // window.location.hash = "";
    const ttoken = hash.access_token;
    // setSkip(skipy);

    if (ttoken) {
      setToken(ttoken);
      // giving the access token to that spotify api
      spotifyObject.setAccessToken(ttoken);
      spotifyObject.getMyCurrentPlayingTrack('37i9dQZEVXcJZyENOWUFo7').then(response => {
        setSong(response?.item?.name);
        setImage(response.item?.album?.images?.[2].url);
        setArtist(response?.item?.artists?.[0]?.name);
        setPlayBackStatus(response?.is_playing);
      });
      spotifyObject.getMyCurrentPlaybackState('37i9dQZEVXcJZyENOWUFo7').then(response => {
        if (response) {
          setPlayPause(pause);
        } else {
          setPlayPause(play);
        }
      });
      console.log(spotifyObject.getUserPlaylists);
    }
  });

  // method that toggles the play pause image
  const playPauseToggle = () => {
    if (playBackStatus) {
      spotifyObject.pause();
      setPlayPause(play);
      setPlayBackStatus(false);
    } else {
      spotifyObject.play();
      setPlayPause(pause);
      setPlayBackStatus(true);
    }
  };

  return (
    <div className="bg-primary-blue-100 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={4} sm={4}>
            <img alt="" src={image} height={80} width={80} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Grid>
              <Grid item>
                <Typography>{song}</Typography>
                <Typography>{artist}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2}>
            <ButtonBase onClick={() => playPauseToggle()}>
              <img alt="" src={playPause.src} height={50} width={50} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2} sm={2}>
            <ButtonBase onClick={handleClickSkip}>
              <img alt="" src={skip.src} height={50} width={50} />
            </ButtonBase>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Spotify;
