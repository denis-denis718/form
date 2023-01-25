import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomSelect from './CustomSelect'

const CustomForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        control,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Container className="px-4 py-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Enter your name",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
                                    message: "Entering numbers and symbols is not allowed"
                                },
                            })}
                        />
                        <Form.Text
                            className={`${errors?.name?.message ? "text-danger" : "text-muted"}`}>
                            {errors?.name?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText2">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your surname"
                            {...register("surname", {
                                required: "Enter your surname",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
                                    message: "Entering numbers and symbols is not allowed"
                                },
                            })}
                        />
                        <Form.Text className={`${errors?.surname?.message ? "text-danger" : "text-muted"}`}>
                            {errors?.surname?.message}
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: 'Enter your email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address input format'
                            }
                        })} 
                    />
                    <Form.Text className={`${errors?.email?.message ? 'text-danger' : 'text-muted'}`}>
                       {errors?.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridNumber" >
                    <Form.Label>Number phone</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your number phone"
                        {...register("phone", {
                            required: 'Enter your number phone',
                            pattern: {
                                value: /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
                                message: 'Enter your phone number in Ukraine format'
                            }
                        })} 
                    />
                    <Form.Text className={`${errors?.phone?.message ? 'text-danger' : 'text-muted'}`}>
                       {errors?.phone?.message}
                    </Form.Text>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            {...register("password", {
                                required: 'Enter password',
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
                                    message: 'Weak password. The password must contain at least 8 characters, at least one uppercase and lowercase Latin letters.'
                                }
                            })}
                        />
                        {
                            errors.password?.message && 
                            <Form.Text className='text-danger'>{errors?.password?.message}</Form.Text>
                        }
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Confirm the password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm the password"
                            {...register('repeatPassword', {
                                required: 'Confirm the password',
                                validate: (value) => value === getValues('password') || 'The password is incorrect'
                            })} />
                            {
                                errors?.repeatPassword?.message && 
                                <Form.Text className='text-danger'>{errors?.repeatPassword?.message}</Form.Text>
                            }
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Label>City</Form.Label>
                    <CustomSelect control={control} name={'select'}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default CustomForm;
