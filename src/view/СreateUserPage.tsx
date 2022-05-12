import * as React from 'react';
import CreateAndUpdateUser from '../components/CreateAndUpdateUser';

function CreateUserPage() {
  return (
    <div>
      <h2>Создание юзера</h2>
      <div className="shadow-container">
        <CreateAndUpdateUser />
      </div>
    </div>
  );
}

export default CreateUserPage;
