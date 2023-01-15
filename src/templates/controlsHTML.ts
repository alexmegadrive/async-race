import { html } from 'code-tag';

export const controls = html` <div class="garage-controls" id="garage-controls">
  <div class="garage-controls_line">
    <input type="text" id="new-name-input" placeholder="New car name" />
    <input type="color" id="new-color-input" />
    <button class="btn garage-btn" data-garage-action="create">Create</button>
  </div>
  <div class="garage-controls_line">
    <input type="text" id="update-name-input" />
    <input type="color" id="update-color-input" />
    <input type="text" id="update-id-input" />
    <button class="btn garage-btn" data-garage-action="update">Update</button>
  </div>
  <div class="garage-controls_line">
    <button class="btn garage-btn" data-garage-action="race">Race</button>
    <button class="btn garage-btn" data-garage-action="reset">Reset</button>
    <button class="btn garage-btn" data-garage-action="generate">Generate cars</button>
  </div>
  <div class="garage-pagination" id="garage-pagination"></div>
</div>`;
