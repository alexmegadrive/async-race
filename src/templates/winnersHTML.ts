import { html } from 'code-tag';

export const winners = html`
  <div id="winners-view" hidden>
    <select class="" name="" id="winners-sort" value="">
      <option class="" value="wins">Wins</option>
      <option class="" value="time">Best time</option>
    </select>
    <div class="winners-list" id="winners-list"></div>
  </div>
`;
