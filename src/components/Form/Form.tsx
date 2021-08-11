import React from 'react';

import './Form.css';

export const Form: React.FC = () => (
  <form className="form">
    <span>Вход</span>
    <div style={{  }}>
      <div style={{  }}>
        <label>
          <input name="login" type="text" />
          <span>Логин</span>
        </label>
      </div>
    </div>
  </form>
);
