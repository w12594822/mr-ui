const datePickerStyle = `
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before,
.react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before,
.react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before,
.react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before {
  border-bottom: none;
  border-top-color: #fff;
}
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before,
.react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}
.react-datepicker-wrapper {
  display: inline-block;
}
.react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}
.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}
.react-datepicker-popper {
  z-index: 1;
}
.react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}
.react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 6px;
}
.react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}
.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}
.react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}
.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}
.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}
.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll {
  display: inline-block;
  margin: 0 2px;
}
.react-datepicker__current-month {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}
.react-datepicker__navigation {
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
}
.react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}
.react-datepicker__navigation--previous:hover {
  border-right-color: #b3b2b2;
}
.react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}
.react-datepicker__navigation--next:hover {
  border-left-color: #b3b2b2;
}
.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}
.react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b2b2;
}
.react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}
.react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b2b2;
}
.react-datepicker__month-container {
  display: inline;
  float: left;
}
.react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}
.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}
.react-datepicker__day-name,
.react-datepicker__day {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}
.react-datepicker__day {
  cursor: pointer;
}
.react-datepicker__day:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}
.react-datepicker__day--today {
  font-weight: bold;
}
.react-datepicker__day--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}
.react-datepicker__day--highlighted:hover {
  background-color: #32be3f;
}
.react-datepicker__day--highlighted-custom-1 {
  color: magenta;
}
.react-datepicker__day--highlighted-custom-2 {
  color: green;
}
.react-datepicker__day--selected,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}
.react-datepicker__day--selected:hover,
.react-datepicker__day--in-selecting-range:hover,
.react-datepicker__day--in-range:hover {
  background-color: #1d5d90;
}
.react-datepicker__day--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}
.react-datepicker__day--keyboard-selected:hover {
  background-color: #1d5d90;
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
  background-color: rgba(33, 107, 165, 0.5);
}
.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
  background-color: #f0f0f0;
  color: #000;
}
.react-datepicker__day--disabled {
  cursor: default;
  color: #ccc;
}
.react-datepicker__day--disabled:hover {
  background-color: transparent;
}
.react-datepicker__input-container {
  position: relative;
  display: inline-block;
}
.react-datepicker__year-read-view,
.react-datepicker__month-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}
.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover {
  cursor: pointer;
}
.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b2b2;
}
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 0.45rem;
}
.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}
.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover {
  cursor: pointer;
}
.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}
.react-datepicker__year-option,
.react-datepicker__month-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover {
  background-color: #ccc;
}
.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b2b2;
}
.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b2b2;
}
.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected {
  position: absolute;
  left: 15px;
}
.react-datepicker__close-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  height: 0;
  outline: 0;
  padding: 0;
  vertical-align: middle;
}
.react-datepicker__close-icon::after {
  background-color: #216ba5;
  border-radius: 50%;
  bottom: 0;
  box-sizing: border-box;
  color: #fff;
  content: "\\00d7";
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 1;
  margin: -8px auto 0;
  padding: 2px;
  position: absolute;
  right: 7px;
  text-align: center;
  top: 50%;
}
.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}
.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 2147483647;
}
.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day {
  width: 3rem;
  line-height: 3rem;
}
@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day {
    width: 2rem;
    line-height: 2rem;
  }
}
.react-datepicker__portal .react-datepicker__current-month {
  font-size: 1.44rem;
}
.react-datepicker__portal .react-datepicker__navigation {
  border: 0.81rem solid transparent;
}
.react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}
.react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b2b2;
}
.react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}
.react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b2b2;
}

/* REACT CONTROL DATE CUSTOM STYLES */

.react-control-date .react-datepicker {
  font-family: 'Open Sans', sans-serif;
}
.react-control-date .react-datepicker-popper {
  white-space: nowrap;
  display: flex;
}
.react-control-date .react-datepicker__header {
  background-color: #fff;
  border-bottom: none;
}
.react-control-date .react-datepicker__triangle {
  z-index: 1;
}
.react-control-date .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
  top: 0;
}
.react-control-date .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {
  bottom: 0;
}
.react-control-date .react-datepicker__triangle {
  border-bottom-color: transparent !important;
  border-top-color: transparent !important;
}
.react-control-date .react-datepicker__triangle::before {
  border-top-color: #fff !important;
  border-bottom-color: #fff !important;
  left: 0 !important;
}
.react-control-date .react-datepicker__day--selected,
.react-control-date .react-datepicker__day--in-selecting-range,
.react-control-date .react-datepicker__day--in-range {
  background-color: #4264fb;
}
.react-control-date .react-datepicker__day--selected:hover,
.react-control-date .react-datepicker__day--in-selecting-range:hover,
.react-control-date .react-datepicker__day--in-range:hover {
  background-color: #314ccd;
}
.react-control-date .react-datepicker__current-month {
  font-weight: 400;
}
.react-control-date .react-datepicker__day--outside-month {
  background-color: #f4f7fb;
  border-radius: 0;
}
.react-control-date--disable-keyboard .react-datepicker__day--keyboard-selected {
  background-color: transparent;
  color: #000;
}
`;

export default datePickerStyle;
