 import React, {useState} from 'react';
 import {useNavigate} from 'react-router-dom';

 import {preview} from '../assets';
 import {getRandomPrompt} from '../utils';
 import {FormField, Loader} from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  const handleSubmit = () => {
     
  }

  const handleChange = (e) => {

  }

  return (
    <><section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning images through by DALL-E AI and share them with the community.</p>
      </div>
    </section><form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange} 
          />

        </div>
      </form></>

  )
}

export default CreatePost;