import React from 'react';

interface ErrorPageProps {
    errorCode: number;
    errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, errorMessage }) => {
    return (
        <div>
            <h1>Ereeeror {errorCode}</h1>
            <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorPage;