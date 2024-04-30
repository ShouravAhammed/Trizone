import errorPage from '../../assets/404.gif'
const ErrorPage = () => {
    return (
        <div className="h-screen">
            <img className='h-full w-full' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;