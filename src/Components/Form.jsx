import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react';
import InputField from './Inputfields';


const Form = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const validate = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }


        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form Submitted', formData);

            setFormData({ email: '', password: '' });
        }
    };

    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };



    return (
        <Box
            sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                padding: '1rem',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Typography fontSize="2rem">Sign in Form</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <InputField
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        error={errors.email}
                        helperText=""
                        required
                    />
                    <InputField
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange('password')}
                        error={errors.password}
                        helperText=""
                        required
                    />
                    <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Form