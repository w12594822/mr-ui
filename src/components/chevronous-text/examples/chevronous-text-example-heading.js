/*
Chevronous text with options.
*/
import React from 'react';
import ChevronousText from '../chevronous-text';

export default class Example extends React.Component {
  render() {
    return (
      <div className="txt-xl">
        <ChevronousText text="Hello Explorer" themeIcon="color-pink w30" />
      </div>
    );
  }
}
