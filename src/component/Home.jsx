import React, { useState, useEffect } from "react";
import axios from "axios";
import './AddPostButton.css'

import {
  Button,
  Typography,
  Card,
  Grid,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <Typography align="center">جاري التحميل...</Typography>;

  // حذف البوست
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      toast.success("تم حذف البوست بنجاح!", {
        position: "top-right",
        autoClose: 3000,
        style: { zIndex: 99999 },
      });
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ أثناء الحذف!", {
        position: "top-right",
        autoClose: 3000,
        style: { zIndex: 99999 },
      });
    }
  };

  return (
    <Box sx={{ marginTop: "20px", width: "100%" }}>
      {/* ToastContainer */}
      <ToastContainer />

      
      <Typography variant="h4" align="center" gutterBottom>
        قائمة المقالات
      </Typography>
      <Box sx={{ textAlign: "center", marginBottom: 3 }}>
  <Link to="/add" style={{ textDecoration: "none", display: "inline-block" }}>
    <button className="but">Add Post</button>
  </Link>
</Box>
      {/* قائمة المقالات */}
      <Grid container spacing={2} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <Card sx={{ width: 270, margin: "0 auto" }}>
              {post.image && (
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                />
              )}
              <Typography
                variant="h6"
                align="center"
                sx={{ p: 1, fontWeight: "500" }}
              >
                {post.title}
              </Typography>
              <Typography variant="body2" sx={{ p: 1 }}>
                {post.body}
              </Typography>

              {/* أزرار تعديل وحذف */}
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  p: 1,
                }}
              >
                <Button
                  component={Link}
                  to={`/edit/${post.id}`}
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 100,
                    fontSize: "16px",
                    transition: "all 0.3s",
                    "&:hover": { fontWeight: "700", transform: "scale(1.05)" },
                  }}
                >
                  تعديل
                </Button>

                <Button
                  onClick={() => handleDelete(post.id)}
                  variant="contained"
                  sx={{
                    width: 100,
                    fontSize: "16px",
                    backgroundColor: "red",
                    transition: "all 0.3s",
                    "&:hover": { backgroundColor: "darkred", fontWeight: "700" },
                  }}
                >
                  حذف
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
