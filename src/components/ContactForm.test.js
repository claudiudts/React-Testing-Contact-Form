import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import ContactForm from './ContactForm';

test('testing the form', () => {
    render(<ContactForm />);

    const firstName = screen.queryByLabelText(/firstName/i);
    const lastName = screen.queryByLabelText(/lastName/i);
    const email = screen.queryByLabelText(/email/i);
    const message = screen.queryByLabelText(/message/i);

    userEvent.type(firstName, 'Claudiu');
    userEvent.type(lastName, 'Sarb')
    userEvent.type(email, 'sarb.claudiu391@gmail.com')
    userEvent.type(message, 'swag')
    
});


