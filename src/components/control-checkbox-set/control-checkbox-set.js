import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import Icon from '../icon';
import ControlWrapper from '../control-wrapper';

export default class ControlCheckboxSet extends React.Component {
  static propTypes = {
    /** Unique id for this control. */
    id: PropTypes.string.isRequired,
    /**
     * An array of object(s) that represent each option of the set.
     * Each object should contain two fields:
     *
     * - `label` which can either be a string or valid JSX
     * - `value` a unique string value
     *
     * Any additional fields added will be passed as attributes to the input
     * element.
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    /**
     * Invoked when the control's value changes.
     * Passed two arguments:
     *
     * - The value. A string matching the `value` field of one of the `options`
     *   props passed.
     * - The `id` prop.
     */
    onChange: PropTypes.func.isRequired,
    /** Accepts an array of strings, where each string matches the value property of an entry in the options prop. */
    value: PropTypes.array,
    /** Icon to use for the checkbox active style. Must match an icon name available in Assembly. */
    icon: PropTypes.string,
    /** When `true`, autofocus attributes are applied to the input that matches the `value` prop passed. */
    autoFocus: PropTypes.bool,
    /** A validation error to display beneath the control. */
    validationError: PropTypes.node,
    /** Classes to apply to the checkbox container. */
    themeCheckboxContainer: PropTypes.string,
    /** Classes to apply to the checkbox element. */
    themeCheckbox: PropTypes.string,
    /** Classes to apply to the control container. */
    themeControlWrapper: PropTypes.string
  };

  static defaultProps = {
    value: [],
    autoFocus: false,
    icon: 'check',
    themeCheckboxContainer: 'txt-s block mb6 flex',
    themeCheckbox: 'mr6 inline-block checkbox--blue checkbox--s-label'
  };

  onChange = (e) => {
    const current = e.target.value;
    const { value } = this.props;
    const index = value.indexOf(current);
    const newValue = value;

    if (index === -1) {
      newValue.push(current);
    } else {
      newValue.splice(index, 1);
    }

    return this.props.onChange(newValue, this.props.id);
  };

  render() {
    const {
      id,
      value,
      options,
      autoFocus,
      icon,
      validationError,
      themeCheckboxContainer,
      themeCheckbox,
      themeControlWrapper
    } = this.props;

    const groupProps = {
      id,
      'data-test': `${id}-input`
    };

    if (validationError) {
      groupProps['aria-invalid'] = true;
    }

    const renderOptions = (d) => {
      const isActive = value.indexOf(d.value) >= 0 ? true : false;
      const extraProps = omit(d, ['value', 'label']);
      return (
        <label
          key={d.value}
          className={`checkbox-container ${themeCheckboxContainer}`}
        >
          <input
            value={d.value}
            checked={isActive}
            aria-checked={isActive}
            autoFocus={autoFocus && isActive}
            onChange={this.onChange}
            name={id}
            role="checkbox"
            type="checkbox"
            {...extraProps}
          />
          <div className={`${themeCheckbox} checkbox`}>
            <Icon name={icon} />
          </div>
          {d.label}
        </label>
      );
    };

    return (
      <ControlWrapper
        themeControlWrapper={themeControlWrapper}
        id={id}
        validationError={validationError}
      >
        <div {...groupProps}>{options.map(renderOptions)}</div>
      </ControlWrapper>
    );
  }
}
