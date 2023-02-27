import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MainCard = ({
  info,
  title,
  className,
  editItemHandler,
  deleteItemHandler,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {info.body}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          post ID: {info.postId}
        </Typography>
        <Typography variant="body2">user: {info.user.username}</Typography>
      </CardContent>
      <CardActions className={className}>
        <IconButton onClick={() => editItemHandler(info)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteItemHandler(info.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MainCard;
