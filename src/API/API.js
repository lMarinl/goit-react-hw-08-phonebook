import axios from 'axios';

const instance = axios.create({
  baseURL: `https://65c785a1e7c384aada6e9ed2.mockapi.io/contacts`,
});

export const requestContacts = async () => {
   const { data } = await instance.get('/contacts');
    return data;
};

export const requestAddContact = async formData => {

    const { data } = await instance.post('/contacts', formData);
    return data;

};

export const requestDeleteContact = async id => {

    await instance.delete(`/contacts/${id}`);
    return id;

};


