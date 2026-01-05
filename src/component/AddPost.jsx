import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack } from "@mui/material"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function AddPost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/posts', {
    
      title,
      body ,
      image
    
    })
      toast.success("تم إضافة البوست بنجاح!", {
  
});


    setTitle('')
    setBody('')
    setImage('')
    // setTimeout(() =>
      setTimeout(() => navigate('/'), 3000);


  }
  return (
    <>
      <ToastContainer />
    <Box className="addpost"  component="form" onSubmit={handleSubmit}
      
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50% , -50%)",
        textAlign: "center",
        bgcolor: "#F0F0F0",
        
        padding: "30px",
      }}
    >
      
      <Stack spacing={2}>
        <Typography className="typography" variant="h3" color="initial">
          Add Post
        </Typography>
        <br />
        <TextField id="" label="العنوان" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />

        <TextField label="المحتوى" value={body}   multiline rows={4} sx={{ maxWidth: "500px" }} onChange={(e) => {
          setBody(e.target.value)
        }} />

        <TextField id=""  label="اضافه الصوره" value={image}   sx={{ maxWidth: "500px" }} onChange={(e) => {
          setImage(e.target.value)
        }} />
      </Stack>
      <Button type="submit"
  variant="contained"
  sx={{
    backgroundColor: '#445444',
    width: '200px',
    margin: ' 20px auto',
    '&:hover': {
      backgroundColor: '#857'
    }
  }}
>
  ارسال
</Button>
    
      </Box>
      </>
  );
}










// import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import { Box, Button, Stack } from "@mui/material";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function AddPost() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [image, setImage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios.post('http://localhost:3001/posts', {
//       title,
//       body,
//       image
//     });

//     // اظهار رسالة النجاح
//     toast.success("تم إضافة البوست بنجاح!", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       style: { zIndex: 99999 } // مهم ليكون فوق كل شيء
//     });

//     // تفريغ الحقول
//     setTitle('');
//     setBody('');
//     setImage('');

//     // الانتقال بعد 2 ثانية ليظهر Toast
//     setTimeout(() => navigate('/'), 2000);
//   }

//   return (
//     <>
//       {/* ToastContainer يجب أن يكون هنا خارج أي Box */}
//       <ToastContainer />

//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           position: "absolute",
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//           bgcolor: "#F0F0F0",
//           padding: "30px",
//         }}
//       >
//         <Stack spacing={2}>
//           <Typography variant="h3" color="initial">
//             Add Post
//           </Typography>

//           <TextField
//             label="العنوان"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <TextField
//             label="المحتوى"
//             value={body}
//             multiline
//             rows={4}
//             sx={{ width: "500px" }}
//             onChange={(e) => setBody(e.target.value)}
//           />

//           <TextField
//             label="اضافه الصوره"
//             value={image}
//             sx={{ width: "500px" }}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </Stack>

//         <Button
//           type="submit"
//           variant="contained"
//           sx={{
//             backgroundColor: '#445444',
//             width: '200px',
//             margin: '20px auto',
//             '&:hover': { backgroundColor: '#857' }
//           }}
//         >
//           ارسال
//         </Button>
//       </Box>
//     </>
//   );
// }
