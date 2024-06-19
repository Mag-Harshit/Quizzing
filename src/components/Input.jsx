import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar2 from './NavBar2';
import axios from 'axios';


const Input = (props) => {
    
    const navigate = useNavigate();
  useEffect(() => {
    if (!props.user) {
      navigate('/');
    }
  }, [props.user, navigate]);

  useEffect(()=>{
    getUser();
  },[])

  async function getUser(){
    console.log("Hello")
    const userId = props.user.uid;
    await axios.post('http://localhost:3000/getUser',{
      ids: userId
    });
  }

  
  return (
    <div>
    <NavBar2 handleSignout={props.handleSignout}/>
    <div className='text-center'>
    <h1 className='mb-4'>CREATE A QUIZ</h1>
    </div>
    <form>
    <div className='gap-5'>
    <h4>Title</h4>
    <input className='title' type='text'></input>
    </div>
    <div className='mt-5'>
    <h4>Description</h4>
    <textarea className='mb-4 description' type='text' rows={10}></textarea>
    </div>
    <div className='mt-2'>
    <h4>Image:</h4>
    <input type="file" id="myFile" name="filename" accept="image/*"/>
    </div>
    </form>
    </div>
    
  )
}

export default Input