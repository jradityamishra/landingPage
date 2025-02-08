import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <ReactLoading type="bars" color="#fff" height={250} width={250} />
        </div>
    );
};

export default Loading; 