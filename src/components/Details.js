import React,{useState} from 'react'
import Card from './Card';
function Details() {
  const [user,setuser]=useState({
   name:"",
   email:"",
   Website:"",
   Imagelink:"",
   Gender:"",
   Skills:""
  });
  const [items, setitems] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setitems([...items,user]);
    setCount(count+1);
    setuser({   name:"",
    email:"",
    Website:"",
    Imagelink:"",
    Gender:"",
    Skills:""});
}
    function handlechange(event){
        let name=event.target.name;
        let value=event.target.value;
        setuser({...user,[name]:value});
    } 
  return (
    <div>
     <form className='form' onSubmit={handleSubmit}>
        <div id="items">
        <label for="fname">Name</label><span> <input value={user.name} onChange={handlechange} type="text" id="name" name="name"></input></span><br />
        </div>
        <div id="items">
        <label for="email">Email</label><span> <input value={user.email} onChange={handlechange} type="mail" id="mail" name="email"></input></span><br />
        </div>
        <div id="items">
        <label for="website">Website</label><span> <input value={user.Website} onChange={handlechange} type="url" id="Website" name="Website"></input></span><br />
        </div>
        <div id="items">
        <label for="imglink">Imagelink</label><span> <input value={user.Imagelink} onChange={handlechange} type="url" id="Imagelink" name="Imagelink"></input></span><br />
        </div>
        <div id="items">
        <label for="Gender">Gender</label><span> <input id ="gender"value={user.Gender} onChange={handlechange} type="text"  name="Gender"></input></span><br />
        </div>
        <div id="items">
        <label for="Skills">Skills</label><span> <input id ="skills"value={user.Skills} onChange={handlechange} type="text"  name="Skills"></input></span><br />
        </div>
        <div id='items' >
            <button id="submit"type="submit" >Enroll</button>
            </div>
        </form>
      <div id="card">
                   { items.map( (data) =>
                    <Card key={count} name={data.name} email={data.email} Website={data.Website}  gender={data.Gender} image={data.Imagelink} skills={data.Skills} />
                    ) }
                </div>
    </div>
  )
}

export default Details