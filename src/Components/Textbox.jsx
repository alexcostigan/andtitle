import React from 'react'

class Textbox extends React.Component {
    render(){
        return(
            <div class="card" style={{width: "18rem"}}>
    <form>
  <div class="mb-3">
    
    <input type="text" placeholder ="enter your name" class="form-control" id="name" />
   
  </div>
  <div class="mb-3">
    
    <input type="text" placeholder ="enter your AND title" class="form-control" id="name" />
   
  </div>
  
  <input type="submit" class="btn btn-primary">Submit</input>
</form>
</div>
        )
    }
}

export default Textbox