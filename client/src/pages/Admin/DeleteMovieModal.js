import { Modal, message } from 'antd';
import { deleteMovie } from '../../calls/movies'


const DeleteMovieModal = ({isDeleteModalOpen, setIsDeleteModalOpen, selectedMovie, setSelectedMovie, getData}) => {

    const handleOk = async () => {
        try{

            const movieId = selectedMovie._id;
            const response = await deleteMovie({ movieId });
          
            if(response.success){
              console.log("id and respone ->  " , movieId, response);
                message.success(response.message);
                getData();
            }else{
                message.error(response.message);
                setSelectedMovie(null);
            }
            setIsDeleteModalOpen(false);

            
        }catch(err){

            setIsDeleteModalOpen(false)
            message.error(err.message);
        }        
    };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <Modal title="Delete Movie?" open={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p className='pt-3 fs-18'>Are you sure you want to delete this movie?</p>
            <p className='pb-3 fs-18'>This action can't be undone and you'll lose this movie data.</p>
      </Modal>
    </>
  );
};

export default DeleteMovieModal;