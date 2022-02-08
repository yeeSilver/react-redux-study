import React from 'react';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import styles from './CheckBox.module.css';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}> 
        {/* styles.클래스명을 줍니다. */}
          {checked ? (
            <AiFillApple className={styles.checked} />
          ) : (
            <AiFillAndroid />
          )}
        </div>
      </label>
      <span>{children}</span>
      <div className = {styles['my-class']}>iOS?? 안드로이드??</div>
    </div>
  );
}

export default CheckBox;
