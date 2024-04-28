import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/')
    }

    const error = useRouteError();
    console.log(error);

    return (
        <div className="text-center h-[80vh] flex flex-col items-center justify-center text-4xl font-medium space-y-5">
            <h2 className="text-red-500">Oops !!!</h2>
            <p>{error.status}. Thats an error.</p>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <button onClick={goBack} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go Back</button>
        </div>
    );
};

export default ErrorPage;