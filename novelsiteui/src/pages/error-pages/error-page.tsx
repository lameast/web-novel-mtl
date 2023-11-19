import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)){
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string'){
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown Error';
    }


    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected errror occurred/.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}