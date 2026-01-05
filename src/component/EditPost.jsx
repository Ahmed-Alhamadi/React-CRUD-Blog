import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, {useEffect , useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function EditPost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const { id } = useParams()
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setTitle(res.data.title)
      setBody(res.data.body)
      setImage(res.data.image)
    })
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/posts/${id}`, {
      
      title,
      body,
      image,
     
       
    });
     toast.success("تم تعديل البوست بنجاح!", {
        
      }),
   setTimeout(() => navigate('/'), 3000);
  }
  return (
    <>
      <ToastContainer />
    <Box component="form"
      onSubmit={handleSubmit}
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
        <Typography variant="h3" color="initial">
          Edit Post
        </Typography>
        <br />
        <TextField id="" label="العنوان" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />

        <TextField label="المحتوى" value={body}   multiline rows={4} sx={{ width: "500px" }} onChange={(e) => {
          setBody(e.target.value)
        }} />

        <TextField id=""  label="اضافه الصوره" value={image}   sx={{ width: "500px" }} onChange={(e) => {
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
  تعديل
</Button>
    
      </Box>
      </>
  )
}
