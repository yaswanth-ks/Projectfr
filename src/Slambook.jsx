import React from "react";
import "./Slambook.css"; 

function Slambook() {
  return (
    <div className="slambook-container">
        <fieldset>
      <legend><h2>Slambook</h2></legend>
      
      <form className="slambook-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"  placeholder="Enter your name" />
        </div>

        {/* Nickname */}
        <div className="form-group">
          <label for="nickname">Nickname:</label>
          <input type="text" id="nickname"  placeholder="Enter your nickname" />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address"  placeholder="Enter your address" />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone"  placeholder="Enter your phone number" />
        </div>

        {/* Memories */}
        <div className="form-group">
          <label htmlFor="memories">Memories:</label>
          <textarea id="memories"  placeholder="Write your memories"></textarea>
        </div>

        
        {/* Gender */}
<div className="form-group">
  <label>Gender:</label>
  <div className="gender-options">
    <label>
      <input type="radio" name="gender" value="male" /> Male
    </label>
    <label>
      <input type="radio" name="gender" value="female" /> Female
    </label>
    <label>
      <input type="radio" name="gender" value="other" /> Other
    </label>
  </div>
</div>

        {/* Favorite Actors */}
        <div className="form-group">
          <label>Favorite Actors:</label>
          <div>
            <label>
              <input type="checkbox"  value="Actor 1" />Thalapathy Vijay
            </label>
            <label>
              <input type="checkbox"  value="Actor 2" /> Thala Ajith
            </label>
            <label>
              <input type="checkbox"  value="Actor 3" /> Suriya
            </label>
          </div>
        </div>

        {/* School */}
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <select id="school" name="school">
            <option value="">Select your school</option>
            <option value="School1">Delhi National School</option>
            <option value="School2">Madras Public School</option>
            <option value="School3">Kochi International School</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      </fieldset>
    </div>
    
  );
}

export default Slambook;