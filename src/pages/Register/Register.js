import React from 'react';
import Card from '../../components/UI/Card/Card';

import Button from '../../components/UI/Button/Button';

const Register = () => {
  const registrationHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="content-wrapper">
      <div className="register">
        <Card>
          <h2 className="form__title">Daftar</h2>
          <form action="#" onSubmit={ registrationHandler } className="form">
            <div className="input-group">
              <label htmlFor="email">Alamat Email</label>
              <input id="email" type="text" placeholder="Masukkan alamat email Anda" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Sandi</label>
              <input id="password" type="password" placeholder="Masukkan password" />
            </div>
            <div className="input-group">
              <label htmlFor="repassword">Ulangi Sandi</label>
              <input id="repassword" type="password" placeholder="Masukkan ulang password" />
            </div>
            <Button color="blue" text="Masuk" className="form__submit"/>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
