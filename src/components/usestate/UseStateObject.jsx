import React, { useState } from "react";
import styled from "styled-components";

const UseStateObject = () => {

  // here i am going to create useState effect with form values createData , setCreateData and inside the useState i have created an object, there is all name variables are there for input type
  
  const [createData ,setCreateData ] = useState({
    username : "",
    email : "",
    password : "",
    confirm_password : "",
  })

  // using this function i am taking name attribute and value attribute value meams 

  const changeFunc = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setCreateData((pre)=>{
        return{ ...pre , [name] : value}
    })
  }



  return (
    <Wrapper>
      <div className="container">
        <div className="card">
          <h2 className="card-title text-center">Register</h2>
          <div className="card-body py-md-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"


                  // here setting value towards the useState object

                  value={createData.username}

                  // calling function there
                  onChange={changeFunc}

                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={createData.email}
                  onChange= {changeFunc}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={createData.password}
                  onChange={changeFunc}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  name="confirm_password"
                  placeholder="confirm-password"
                  autoComplete="off"
                  value={createData.confirm_password}
                  onChange ={changeFunc}
                />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <button className="btn btn-primary">Create Account</button>
              </div>
            </form>
            <div>
              <p>{`my name is : ${createData.username} and email : is ${createData.email} `}</p>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 2.4rem;
    margin: 3.2rem 0;
  }
  a {
    color: #333;
  }
  a:hover {
    color: #da5767;
    text-decoration: none;
  }
  .card {
    border: 0.1rem solid #f8f9fa;
    padding: 0 3.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .form-control:focus {
    color: #000000;
    background-color: #ffffff;
    border: inset 0.5rem solid #da5767;
    outline: 0;
    box-shadow: none;
  }

  input {
    width: 25rem;
    padding: 1rem 2rem;
    font-family: "Work Sans", sans-serif;
    outline: 0;
    border: none;
    font-size: 1.2rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    background-color: #df8c96;
    border-color: #df8c96;
    margin-bottom: 3.2rem;
  }

  .btn-primary:hover {
    background: #da5767;
    border: inset 0.2rem solid #da5767;
    transition: 0.3s;
  }
`;

export default UseStateObject;
