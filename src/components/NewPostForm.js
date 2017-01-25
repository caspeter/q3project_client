import React from 'react';

var CreatePost = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render: function () {
    return (
      <form>
        <label>
          Title:
          <input id="" type="text" name="postTitle"/>
        </label>
        <div>
          <label>
            Description:
            <textarea id="" type="text" name="postDescription"/>
          </label>
        </div>
        <div>
          Project Location:
          <div>
            <label>
              Zip Code:
              <input />
            </label>
          </div>
          </div>
        <div>
          Project Information:
          <div>
            <label>
              Budget
              <input />
            </label>
            <div>
              <label>
                Skills Needed:<br></br>
                <input type="checkbox" name="None" value="1"/>None<br></br>
                <input type="checkbox" name="Painting" value="2"/>Painting<br></br>
                <input type="checkbox" name="Drawing" value="3"/>Drawing<br></br>
                <input type="checkbox" name="Sculpting" value="4"/>Sculpting<br></br>
              </label>
            </div>
          </div>
          </div>
        <button type="submit" value="submit">Submit</button>
      </form>
    )
  }
})

export default CreatePost
