import "./App.css";
import { useState } from 'react';

function App() {

  const [formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"" ,
    country:"India",
    streetAdress:"",
    city:"",
    state:"",
    postalcode:"",
    comments:false,
    candidates:false,
    offers:false

  })

  function changeHandler(event){
    const{name,value,checked,type} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:type === checked ? checked: value}))
  };

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);

    
  }

  return (
    <div className="flex flex-col items-center mt-2 bg-slate-100 ">
        <form onSubmit={submitHandler}
        className="md:w-1/2 md:max-w-[1200px] rounded-md p-[30px] mx-auto
         flex flex-col  shadow-lg bg-white">

          <label htmlFor="firstName"
          className="font-medium text-md">First Name</label>
          <br></br>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <br></br>

          <label htmlFor="lastName" className="font-medium text-md">Last Name</label>
          <br></br>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <br></br>

          <label htmlFor="email" className="font-medium text-md">Email address</label>
          <br></br>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="acbcde123@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <br></br>
          <label htmlFor='country' className="font-medium text-md">Country</label> 
          <br></br>
          <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline outline-gray-300  rounded-sm">
            <option>India</option>
            <option>UAE</option>
            <option>USA</option>
            <option>Italy</option>
            <option>Spain</option>
          </select>

          <br></br>
          <label htmlFor="streetAdress" className="font-medium text-md">Street address</label>
          <br></br>
          <input
            type="text"
            name="streetAdress"
            id="streetAdress"
            placeholder="12345 Main st"
            value={formData.streetAdress}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <br></br>
          <label htmlFor="city" className="font-medium text-md">City</label>
          <br></br>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Pryagraj"
            value={formData.city}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <br></br>
          <label htmlFor="state" className="font-medium text-md">State</label>
          <br></br>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Uttar Pradesh"
            value={formData.state}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
            required
          />

          <br></br>
          <label htmlFor="postalcode" className="font-medium text-md">ZIP /Postal code</label>
          <br></br>
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="211004"
            value={formData.postalcode}
            onChange={changeHandler}
            className="outline outline-gray-300  rounded-sm"
          />

          <fieldset className="mt-4 mb-4">
            <legend className="font-medium text-md">By Email</legend>
            <br></br>
            
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments" className="font-medium text-md">Comments</label>
                <p>Get notified when post a comment on a posting.</p>
              </div>
            </div>
            
            <div  className="flex items-center gap-4">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="candidates" className="font-medium text-md">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            
            <div  className="flex items-center gap-4">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="offers" className="font-medium text-md">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>

          </fieldset>

          <fieldset className="mb-4 " >
            <legend className="font-medium text-md">Push Notification</legend>
            <p className="text-sm text-gray-500 ">These are delivered via SMS to your mobile phone.</p>

            <div className="flex gap-4 items-center mt-2">
              <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className="w-4 h-4 "></input>
              <label htmlFor="pushEverything" className="font-medium  text-md">Everything</label>
              
            </div>
            
            <div className="flex gap-4 items-center mt-2">
              <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Email"
              onChange={changeHandler}
              className="w-4 h-4"></input>
              <label htmlFor="pushEmail" className="font-medium text-md">Email</label>
              
            </div>
            
            <div className="flex gap-4 items-center mt-2">
              <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="Nothing"
              onChange={changeHandler}
              className="w-4 h-4"></input>
              <label htmlFor="pushNothing" className="font-medium text-md">Nothing</label>

            </div>
            

            
          </fieldset>

          <button
          className="bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 ">
            save
          </button>


          </form>
    </div>
  );
}

export default App;
