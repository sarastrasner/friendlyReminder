import React from 'react';
import DataTable from '../dataTable';
import Header from '../header/header';
import Footer from '../footer/footer';
import './if.scss';

import AppSettingsContext from '../../context/settings/context';
import Auth from '../../context/auth/auth';

function If(props) {
  return (
    <div className="grid">
      <Auth capability="read">
        <AppSettingsContext>
          <Header />
          <DataTable />
          <Footer />
        </AppSettingsContext>
      </Auth>
    </div>
  );
}

export default If;
