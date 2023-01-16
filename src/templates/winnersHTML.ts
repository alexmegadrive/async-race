import { html } from 'code-tag';

export const winners = html`
  <div id="winners-view" hidden>
    <div id="winners-pagination"></div>
    <select class="" name="" id="winners-sort" value="">
      <option class="" value="time">Best time</option>
      <option class="" value="wins">Wins</option>
    </select>
    <div class="winners-list" id="winners-list"></div>
  </div>
`;
