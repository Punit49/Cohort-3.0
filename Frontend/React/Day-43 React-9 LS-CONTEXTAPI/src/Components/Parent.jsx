import User from "./User";
import Form from "./Form";

const Main = ({ isFormVisible, setIsFormVisible }) => {
  
  return (
    <div className='flex h-screen p-3 gap-7 flex-wrap'>
      {
        isFormVisible ? 
        <Form setIsFormVisible={setIsFormVisible} /> : 
        <User /> 
      }
    </div>
  )
}

export default Main
