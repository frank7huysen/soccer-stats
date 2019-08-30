import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { SoccerStats } from '../src/SoccerStats.js';
import '../soccer-stats.js';

storiesOf('soccer-stats', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SoccerStats))
  .add(
    'Alternative Title',
    () => html`
      <soccer-stats .title=${'Something else'}></soccer-stats>
    `,
  );
