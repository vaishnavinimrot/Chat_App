import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { createUserWithEmailAndPassword} from "firebase/auth";

const LoginContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh", // Full screen height
  display: "flex",
  justifyContent: "center", // Align to the right
  alignItems: "center", // Align to the bottom
  padding: "20px", // Space from edges
}));

const Item = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
}));

const Form = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  justifyContent: "center",
}));

const CustomInput = styled(TextField)(({ theme }) => ({
  "& input": {
    backgroundColor: "rgba(17, 25, 40, 0.6)",
    outline: "none",
    border: "none",
    padding: "10px 20px",
    color: "white",
    borderRadius: "5px",
  },
  "& input::placeholder": {
    color: "white",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  width: "100px",
  padding: "10px 10px",
  border: "none",
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",
  fontWeight: 500,
  backgroundColor: "#1f8ef1",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Separator = styled(Box)(({ theme }) => ({
  width: "2px",
  height: "100%",
  backgroundColor: "#dddddd35",
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px", // Space between the avatar and the text
}));

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    
  };
 
  const handleRegister = async(e) => {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData(e.target);

    const { username, email, password}= Object.fromEntries(formData);
   

  try{
    const res= await createUserWithEmailAndPassword(auth,email,password)

    await setDoc(doc(db, "users", res.user.uid), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })
  }catch(err){
    console.log(err)
    toast.error(err.message)
  }
    
  };

  return (
    <LoginContainer>
      <Item>
        <Typography variant="h5">Welcome back,</Typography>
        <Form onSubmit={handleLogin}> {/* Make sure onSubmit calls handleLogin */}
          <CustomInput type="text" placeholder="Email" name="email" />
          <CustomInput type="text" placeholder="Password" name="password" />
          <CustomButton type="submit" variant="contained">
            Sign In
          </CustomButton>
        </Form>
      </Item>
      <Separator />
      <Item>
        <Typography variant="h5">Create an Account</Typography>
        <Form onSubmit={handleRegister}>
  <AvatarContainer>
    <label htmlFor="file" style={{ cursor: "pointer" }}>
      <img
        src={avatar.url || "./avatar.png"}
        alt="Avatar"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          objectFit: "cover",
          opacity: 0.6,
        }}
      />
    </label>
    <span>Upload an Image</span>
  </AvatarContainer>
  <input
    type="file"
    id="file"
    style={{ display: "none" }}
    onChange={handleAvatar}
  />
  <CustomInput type="text" placeholder="Username" name="username" />
  <CustomInput type="email" placeholder="Email" name="email" />
  <CustomInput type="password" placeholder="Password" name="password" />
  <CustomButton type="submit" variant="contained">
    Sign Up
  </CustomButton>
</Form>
      </Item>

      {/* ToastContainer is used to show the toast notifications */}
      <ToastContainer />
    </LoginContainer>
  );
};

export default Login;
