import React from 'react';
import Card from '../../components/UI/Card/Card';

import './Login.css';

import Button from '../../components/UI/Button/Button';

const Login = () => {
  const loginHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="content-wrapper">
      <div className="login">
        <Card>
          <h2 className="form__title">Masuk</h2>
          <form action="#" onSubmit={ loginHandler } className="form">
            <div className="input-group">
              <label htmlFor="email">Alamat Email</label>
              <input id="email" type="text" placeholder="Masukkan alamat email Anda" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Sandi</label>
              <input id="password" type="password" placeholder="Masukkan password" />
            </div>
            <Button color="blue" text="Masuk" className="form__submit"/>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
