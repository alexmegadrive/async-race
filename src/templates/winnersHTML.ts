import { html } from 'code-tag';

export const winners = html`
  <div id="winners-view" hidden>
    <div id="winners-pagination"></div>
    <select class="" name="" id="winners-sort" value="">
      <option class="" value="time-asc">Time (best to worst)</option>
      <option class="" value="time-desc">Time (worst to best)</option>
      <option class="" value="wins-desc">Wins (best to worst</option>
      <option class="" value="wins-asc">Wins (worst to best</option>
      <!-- <option class="" value="id">ID</option> -->
    </select>
    <div class="winners-list" id="winners-list"></div>
  </div>
`;
