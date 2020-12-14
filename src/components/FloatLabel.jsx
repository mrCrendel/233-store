import React, {useState} from 'react';

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass = focus || value ? 'label label-float' : 'label';

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
