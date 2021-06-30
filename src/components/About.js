import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='text-center'>
      <h4>Version 1.0.0</h4>
      <p className='text-secondary'>Made by Babadinho</p>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default About;
