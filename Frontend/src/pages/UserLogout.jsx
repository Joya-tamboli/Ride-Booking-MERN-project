import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:4000/users/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true, // needed if token is in cookies too
    })
    .then((response) => {
      localStorage.removeItem('token');
      navigate('/login');
    })
    .catch((err) => {
      console.error('Logout error:', err);
    });
  }, []);

  return <div>UserLogout</div>;
};

export default UserLogout;
