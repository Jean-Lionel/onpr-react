import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./cardBlog.css"

export default function CardBlog(props) {
  const article  = props.article;

  return (
    <Card sx={{ maxWidth: 300 }} className="card_blog">
      <CardMedia
        className="image_artcle"
        component="img"
       
        image={article.image_source_url}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {article.title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}