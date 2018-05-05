import { RapidVideo } from './players/rapidvideo';
import { MCloud } from './players/mcloud';
import { Streamango } from './players/streamango';
import { Openload } from './players/openload';
import { KissAnimePlayer } from './players/kissanime';
import { TwistPlayer } from './players/twist';
import { Twist } from './providers/twist';
import { NineAnime } from './providers/9anime';

const URL = window.location.href;

// tslint:disable:no-unused-expression
// Player
if (/rapidvideo\.com\/e\/.+/.test(URL)) {
  new RapidVideo();
} else if (/mcloud.to\/embed\/.+/.test(URL)) {
  new MCloud();
} else if (/streamango.com\/embed\/.+/.test(URL)) {
  new Streamango();
} else if (/openload.co\/embed\/.+/.test(URL)) {
  new Openload();
} else if (/kissanime\.ru\/Anime\/.+\/.+?id=.+&s=(alpha|beta)/.test(URL)) {
  new KissAnimePlayer();
} else if (/twist.moe\/a\/.+/.test(URL)) {
  new TwistPlayer(); // Player
  new Twist(); // Provider
} else if (/9anime\.is\/watch\/.+/.test(URL)) {
  new NineAnime();
}
